import React, { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router";
import '../../style/GameStyle.css';
import { game } from "../../constants/gameList";
import { useDispatch, useSelector } from "react-redux";
import { addActiveIndex, removeActiveIndex } from "../../store/actions";

export const Game = () => {
    const history = useHistory();
    const indexActive = useSelector((state) => state.indexActive);
    const dispatch = useDispatch();

    const [gameIndex, setGameIndex] = useState();
    const [list, setList] = useState([]);
    const [text, setText] = useState('PENGUIN');
    const [score, setScore] = useState(0);
    const [newList, setNewList] = useState([]);

    useEffect(() => {
        setNewList(game[gameIndex])
    },[gameIndex])

    const showLeaderBoard = () => {
        history.push("/leaderboard");
    }
    const showNamePicker = () => {
        history.push("/name-picker");
    } 
  
    const nextWord = () => {
        const textIndex = Math.floor(Math.random()*list.length);
        setText(list[textIndex]);
        list.splice(textIndex, 1);
    }

    const correct = (test) => {      
        setScore(score + 1);      
        let correctWordIdx = test.findIndex(word => word === text);
        test.splice(correctWordIdx, 1)
        setNewList(test);
        nextWord();  
    }

    const repeatList = () => {
        console.log('newList:', newList);
        setList([...newList]);        
        nextWord();
    }

    const showGame = (index) => {
        console.log(index)
        setText(index === 8 ? 'TEST GAME, CLICK START' : `GAME NUMBER: ${index + 1} CLICK START`)
        setGameIndex(index);
        setList([...game[index]]);
        setScore(0);
        
        dispatch(addActiveIndex(index));
    }

    const reset = () => {
        dispatch(removeActiveIndex([]));
        setScore(0);
    }
    
    useEffect(() => {
        if(score === 8){
            setText('CONGRATS!!!')
        }
    }, [score])

    return (
    <div class="gameContainer">
        <div class="headerMenu"> 
            <Button class="topBtn" variant="contained" onClick={showLeaderBoard}>Leaderboard</Button>
            <Button class="topBtn" variant="contained" onClick={showNamePicker}>Name Picker</Button>
        </div>
        <div class="btnContainer">            
            {game.map((item, index) => (
            <Button class={indexActive?.includes(index) ? 'btnActive' : 'btn'} variant="contained" onClick={() => showGame(index)}>{index === 8 ? 'TEST GAME' : index + 1}</Button>
            ))}
        </div>

        <div class="body">
            <div class="scoreDiv">
                <h1>Score:</h1>
                <span class="scoreText"> {score} </span>
            </div>
      
            <div class="timerWordContainer">
                <div class="timer">
                    <iframe width="100%" height="300" src="https://www.youtube.com/embed/aKQockCCt4w?controls=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                </div>
                <div class="textContainer">{text}</div>
            </div>

            <div class="anwers">
                <Button class="answersBTn" variant="contained" >YES</Button>
                <Button class="answersBTn" variant="contained" >NO</Button>
                <Button class="answersBTn" variant="contained" >MAYBE</Button>
            </div>    
        </div>

        

        <div class="btnContainer">
            <Button class="btn" variant="contained" onClick={reset}>RESET</Button>
            <Button class="btn" variant="contained" onClick={nextWord}>START</Button>
            <Button class="btn" variant="contained" onClick={repeatList}>REPEAT</Button>
            <Button class="btn" variant="contained" onClick={nextWord}>PASS</Button>       
            <Button class="btn" variant="contained"  onClick={() => correct(game[gameIndex])}>CORRECT</Button>
            
        </div>
        
    </div>
    )
}



