const Header = () => {
  let output: any;
  let count = 0;

  window.addEventListener("load", (event) => {
    output = document.getElementById('text');
  });
  
    const input = () => {
      let value;
      count++;
      console.log(count);
      if (count >= 20) {
        value = Math.floor(Math.random() * 100 + 1).toString();
        output!.innerHTML = value;

        if (parseInt(value) == 1) {
          window.alert("YOU HAVE WON!!!!!!!!!!!!!!")
        } else {
          setTimeout(() => {
            window.alert("SAD!!!!!!!!!!!!!!!!");
          }, 500);
        }
      } else {
        output!.innerHTML = Math.floor(Math.random() * 99 + 2).toString();
        setTimeout(() => {
          window.alert("SAD!!!!!!!!!!!!!!!!");
        }, 500);
      }
  }

  return (
    <div className="">
      <h1>National Honors Society!</h1>
      <h2>Roll a number between 1-100. If you roll a 1, you win a prize!</h2>
      <div id="output">
      <p id="text"></p>
      
      </div>
      <button onClick={input} id="btn">
        Enter!
      </button>
    </div>
  )
}


export default Header;
