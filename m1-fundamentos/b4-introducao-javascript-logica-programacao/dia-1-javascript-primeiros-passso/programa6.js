let peca = "CavaLo";

peca = peca.toLowerCase();

switch(peca){
    case "peao":
        console.log("\n",peca,":\n Pode se mover somente para frente e uma casa por vez, com exceção do primeiro momvimento!");
        break;  

    case "bispo":
        console.log("\n",peca,":\n Pode se mover na diagonal quantas casa quiser!");
        break;  

    case "torre":
        console.log("\n",peca,":\n Pode se mover na horizontal e vertical quantas casa quiser!");
        break;  

    case "cavalo":
        console.log("\n",peca,":\n Pode se mover em L para qualquer direção com em blocos de 3 casas!");
        break; 

    case "rainha":
        console.log("\n",peca,":\n Pode se mover em qualquer direção quantas casas quiser");
        break; 

    case "rei":
        console.log("\n",peca,":\n Pode se mover em qualquer direção apenas uma casa");
        break; 
    
    default: 
    console.log("\nPeça inexistente!");

}
