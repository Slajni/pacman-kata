import { BooleanLiteral } from "@babel/types";

export default class PacMan {

    lives: number;
    points: number;
    level : number;
    ballCount : number;
    ghostCount : object;
    state: boolean;
    superTime : number;
    constructor({lives=3, points=0, level=0, ballCount=0, ghostCount={}, state=false, superTime=0}){

        this.lives = lives;
        this.points = points;
        this.level = level;
        this.ballCount = ballCount;
        this.state = state;
        this.superTime = superTime;
        this.ghostCount = ghostCount;
    }

    tick(){
        
        if (this.state){
            if (this.superTime > 1){
                this.superTime -= 1;
            }else{
                this.superTime = 0;
                this.state = false;
            }
        }
    }    

    eatBall(ball){
        this.points += 1;
        if (this.ballCount >= 39){
            this.ballCount = 0;
            this.level += 1;
        }
        else
            this.ballCount += 1;
        if (ball){
            this.state = true;
            this.superTime = 10;
        }

    }

    eatGhost(name){
        if (this.state){
            this.points  += 10;
            this.ghostCount['total'] += 1;
            this.ghostCount[name] += 1;

        }else{
            this.lives -= 1;
            if (this.lives == 0){
                this.points = 0;
            }
        }
    }

}


