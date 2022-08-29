document.addEventListener ("keydown", function (zEvent) {
    if (zEvent.ctrlKey  &&  zEvent.altKey  &&  zEvent.key === "g") {

        //var q = document.querySelector("body > game-app").shadowRoot.querySelector("#game > game-keyboard").shadowRoot.querySelector("#keyboard > div:nth-child(1) > button:nth-child(1)");
        //var w = document.querySelector("body > game-app").shadowRoot.querySelector("#game > game-keyboard").shadowRoot.querySelector("#keyboard > div:nth-child(1) > button:nth-child(2)");
        //var e = document.querySelector("body > game-app").shadowRoot.querySelector("#game > game-keyboard").shadowRoot.querySelector("#keyboard > div:nth-child(1) > button:nth-child(3)");
        //var r = document.querySelector("body > game-app").shadowRoot.querySelector("#game > game-keyboard").shadowRoot.querySelector("#keyboard > div:nth-child(1) > button:nth-child(4)");
        //var t = document.querySelector("body > game-app").shadowRoot.querySelector("#game > game-keyboard").shadowRoot.querySelector("#keyboard > div:nth-child(1) > button:nth-child(5)");
        //var y = document.querySelector("body > game-app").shadowRoot.querySelector("#game > game-keyboard").shadowRoot.querySelector("#keyboard > div:nth-child(1) > button:nth-child(6)");
        //var u = document.querySelector("body > game-app").shadowRoot.querySelector("#game > game-keyboard").shadowRoot.querySelector("#keyboard > div:nth-child(1) > button:nth-child(7)");
        //var i = document.querySelector("body > game-app").shadowRoot.querySelector("#game > game-keyboard").shadowRoot.querySelector("#keyboard > div:nth-child(1) > button:nth-child(8)");
        //var o = document.querySelector("body > game-app").shadowRoot.querySelector("#game > game-keyboard").shadowRoot.querySelector("#keyboard > div:nth-child(1) > button:nth-child(9)");
        //var p = document.querySelector("body > game-app").shadowRoot.querySelector("#game > game-keyboard").shadowRoot.querySelector("#keyboard > div:nth-child(1) > button:nth-child(10)");
            
        //var a = document.querySelector("body > game-app").shadowRoot.querySelector("#game > game-keyboard").shadowRoot.querySelector("#keyboard > div:nth-child(2) > button:nth-child(2)");
        //var s = document.querySelector("body > game-app").shadowRoot.querySelector("#game > game-keyboard").shadowRoot.querySelector("#keyboard > div:nth-child(2) > button:nth-child(3)");
        //var d = document.querySelector("body > game-app").shadowRoot.querySelector("#game > game-keyboard").shadowRoot.querySelector("#keyboard > div:nth-child(2) > button:nth-child(4)");
        //var f = document.querySelector("body > game-app").shadowRoot.querySelector("#game > game-keyboard").shadowRoot.querySelector("#keyboard > div:nth-child(2) > button:nth-child(5)");
        //var g = document.querySelector("body > game-app").shadowRoot.querySelector("#game > game-keyboard").shadowRoot.querySelector("#keyboard > div:nth-child(2) > button:nth-child(6)");
        //var h = document.querySelector("body > game-app").shadowRoot.querySelector("#game > game-keyboard").shadowRoot.querySelector("#keyboard > div:nth-child(2) > button:nth-child(7)");
        //var j = document.querySelector("body > game-app").shadowRoot.querySelector("#game > game-keyboard").shadowRoot.querySelector("#keyboard > div:nth-child(2) > button:nth-child(8)");
        //var k = document.querySelector("body > game-app").shadowRoot.querySelector("#game > game-keyboard").shadowRoot.querySelector("#keyboard > div:nth-child(2) > button:nth-child(9)");
        //var l = document.querySelector("body > game-app").shadowRoot.querySelector("#game > game-keyboard").shadowRoot.querySelector("#keyboard > div:nth-child(2) > button:nth-child(10)");
            
        //var z = document.querySelector("body > game-app").shadowRoot.querySelector("#game > game-keyboard").shadowRoot.querySelector("#keyboard > div:nth-child(3) > button:nth-child(2)");
        //var x = document.querySelector("body > game-app").shadowRoot.querySelector("#game > game-keyboard").shadowRoot.querySelector("#keyboard > div:nth-child(3) > button:nth-child(3)");
        //var c = document.querySelector("body > game-app").shadowRoot.querySelector("#game > game-keyboard").shadowRoot.querySelector("#keyboard > div:nth-child(3) > button:nth-child(4)");
        //var v = document.querySelector("body > game-app").shadowRoot.querySelector("#game > game-keyboard").shadowRoot.querySelector("#keyboard > div:nth-child(3) > button:nth-child(5)");
        //var b = document.querySelector("body > game-app").shadowRoot.querySelector("#game > game-keyboard").shadowRoot.querySelector("#keyboard > div:nth-child(3) > button:nth-child(6)");
        //var n = document.querySelector("body > game-app").shadowRoot.querySelector("#game > game-keyboard").shadowRoot.querySelector("#keyboard > div:nth-child(3) > button:nth-child(7)");
        //var m = document.querySelector("body > game-app").shadowRoot.querySelector("#game > game-keyboard").shadowRoot.querySelector("#keyboard > div:nth-child(3) > button:nth-child(8)");
        var wordlecookie = localStorage.getItem("nyt-wordle-state");
        //var solution = wordlecookie["solution"];  
        var wordlecookieparsed = JSON.parse(wordlecookie);
        console.log(wordlecookie);
        var solution = wordlecookieparsed.solution;
        var enter = document.querySelector("body > game-app").shadowRoot.querySelector("#game > game-keyboard").shadowRoot.querySelector("#keyboard > div:nth-child(3) > button:nth-child(1)");
        document.querySelector("body > game-app").shadowRoot.querySelector("game-theme-manager > header > div.title").value = "CRACKED";
        //var solution = new wordle.bundle.GameApp().solution;
        var solutionletters = solution.split("");
        var divguide = {
            "q": "1",
            "w": "1",
            "e": "1",
            "r": "1",
            "t": "1",
            "y": "1",
            "u": "1",
            "i": "1",
            "o": "1",
            "p": "1",
            "a": "2",
            "s": "2",
            "d": "2",
            "f": "2",
            "g": "2",
            "h": "2",
            "j": "2",
            "k": "2",
            "l": "2",
            "z": "3",
            "x": "3",
            "c": "3",
            "v": "3",
            "b": "3",
            "n": "3",
            "m": "3",
        };
        
        var buttonguide = {
            "q": "1",
            "w": "2",
            "e": "3",
            "r": "4",
            "t": "5",
            "y": "6",
            "u": "7",
            "i": "8",
            "o": "9",
            "p": "10",
            "a": "2",
            "s": "3",
            "d": "4",
            "f": "5",
            "g": "6",
            "h": "7",
            "j": "8",
            "k": "9",
            "l": "10",
            "z": "2",
            "x": "3",
            "c": "4",
            "v": "5",
            "b": "6",
            "n": "7",
            "m": "8",
        };
        
        
        for(var item in solutionletters){
            item = solutionletters[item];
            //console.log(item);
            var divnum = divguide[item];
            var buttonnum = buttonguide[item];
            var button = document.querySelector("body > game-app").shadowRoot.querySelector("#game > game-keyboard").shadowRoot.querySelector(`#keyboard > div:nth-child(${divnum}) > button:nth-child(${buttonnum})`);
            button.click();
        }
        
        enter.click();


                            
    } } );

