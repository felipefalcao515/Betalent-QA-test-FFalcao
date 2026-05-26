from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
from selenium.webdriver.firefox.options import Options

class TestWebPage:

    def setup_method(self):

#navigate
        options = Options()
        options.add_argument("--headless")
        self.driver = webdriver.Firefox(options=options)
        self.wait = WebDriverWait(self.driver, 10)
        self.data_title = {}

#1 fetch url
    def test_fetch_title(self):
        url = "https://the-internet.hackerearth.com/"

        self.driver.get(url)

        self.wait.until(EC.title_contains("Internet"))

        self.data_title["title"] = f"<{self.driver.title}>"

#2 click redirect
        self.wait.until(
            EC.element_to_be_clickable((By.LINK_TEXT, "Redirect Link"))
        ).click()

#3 store heading
        redirector_heading = self.wait.until(
            EC.presence_of_element_located((By.TAG_NAME, "h3"))
        ).text
    
#4 find link by id
        self.wait.until(
            EC.element_to_be_clickable((By.ID, "redirect"))
        ).click()

#5 find codes
        codes_elements = self.wait.until(
            EC.presence_of_all_elements_located((By.CSS_SELECTOR, "ul li a"))
        )
        codes = [c.text for c in codes_elements]

#6 click 500
        self.wait.until(
            EC.element_to_be_clickable((By.LINK_TEXT, "500"))
        ).click()

        final_text = self.wait.until(
            EC.presence_of_element_located((By.TAG_NAME, "p"))
        ).text

        print(self.data_title)
        print(redirector_heading)
        print(codes)
        print(final_text)

    def teardown_method(self):
        self.driver.quit()

if __name__ == "__main__":
    test = TestWebPage()
    test.setup_method()
    test.test_fetch_title()
    test.teardown_method()