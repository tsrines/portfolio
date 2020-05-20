import React, { } from 'react';
// import { Link, Switch, Route, Path } from 'react-router'
// import { BrowserRouter as Router } from 'react-router-dom'
// import { ButtonAppBar } from './components/nav'
import { Picture } from './components/picture'
import './App.css'

function App() {
  return (
    <div className="App">
      <Picture />
    </div>
  );
}

export default App;


class Solution {
  solve(nums) {
    let dummyArray = []
    let result = 0
    nums.forEach(num => {
      for(let tester of nums){
        if(Math.abs(num) === tester) {
          dummyArray.push(num)
        }
      }
    })
    dummyArray.forEach(num => {
      if(num > result) {
        result = num
      }
    })
      return result
  }
    
}
    


      



