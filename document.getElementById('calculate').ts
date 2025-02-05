document.getElementById('calculate').addEventListener('click', function() {
  let name1 = document.getElementById('name1').value;
  let name2 = document.getElementById('name2').value;  
  let compatibility = Math.floor(Math.random() * 101); // Random compatibility

        document.getElementById('result').innerText = `Compatibility: ${compatibility}%`;

    });


//very basic implementation
document.getElementById("valentine-form").addEventListener("submit",function(e){
    e.preventDefault();
    alert("Message sent successfully !") //replace with actual implementation 
});