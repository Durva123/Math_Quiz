function send(){
    getItem.document.getElementById("number1, number2")
    output.setItem("number1*number2" number1*number2)
  }
  
  
  
  
  function check(){
    get_answer=document.getElementByIdElementById("input_chack_box").value;
    if(get_answer == actual_answer){
       if(answer_turn == "player1"){
         update_player1_score=player1_score+1;
         document.getElementById("player1_score").innerHTML = update_player1_score;   }
      else{
        update_player2_score= player2_score+1;
        document.getElementById("player2_score").innerHTML = update_player2_score;   }
      }
    }
  }