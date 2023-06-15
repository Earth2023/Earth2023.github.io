const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))
    const repeatedGreetings = async () => {
      await sleep(300)
      document.title = "Earth"
      await sleep(300)
      document.title = "Earth2023"
      await sleep(300)
      document.title = "Earth2023个"
      await sleep(300)
      document.title = "Earth2023个人"
      await sleep(300)
      document.title = "Earth2023个人网"
      await sleep(300)
      document.title = "Earth2023个人网站"
    }
    repeatedGreetings()