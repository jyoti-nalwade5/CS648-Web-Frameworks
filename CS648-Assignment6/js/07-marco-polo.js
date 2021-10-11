var checkNo;
for(checkNo=1; checkNo<+100; checkNo++){

    if(checkNo%3==0){
        if(checkNo%5==0){
            document.write("Macro!Polo!"+"</br>")
            window.console.log("Macro!Polo!") ;
        }
        else{
            document.write("Macro!"+"</br>")
            window.console.log("Macro!");
        }
    }
    else if(checkNo%5==0){
        document.write("Polo!"+"</br>")
        window.console.log("Polo!") ;
    }
    else{
        document.write(checkNo+"</br>")
        window.console.log(checkNo);
    }

}