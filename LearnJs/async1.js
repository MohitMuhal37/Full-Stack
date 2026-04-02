function postData(){
    return new Promise((resolve) => {
      setTimeout(() => {
          resolve("Post is Posted on Insta")
      }, 2000)
    });
}

function comment(){
    return new Promise((resolve) => {
      setTimeout(() => {
          resolve("Comment is Posted on Insta")
      }, 3000)
    });
}

async function Posted(){
    try {
        console.log("Fetching the data...");

        const Postdata = await postData();
        console.log(Postdata);

        const Commentdata = await comment();
        console.log(Commentdata);

        console.log("Data is fetched successfully");
    } catch (error) {
        console.log("Errors are Bluffs ", error);
    }
}

Posted();