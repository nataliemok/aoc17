var input = `0
3
0
1
-3`;

function mazes(str) {
  var arr = str.split('\n').map(e => { return Number(e); });

  var index = 0;
  var stuckInMaze = true;
  var steps = 0;

  while (stuckInMaze) {
    if (index > arr.length - 1) {
      stuckInMaze = false;
    }

    if (arr[index] === 0) {
      arr[index] += 1
    } else if (arr[index] >= 3) {
      arr[index] -= 1;
      index += (arr[index] + 1);
    } else {
      arr[index] += 1;
      index += (arr[index] - 1);
    }

    steps += 1;

    if (arr[index] === undefined) {
      stuckInMaze === false
      break;
    }

  }

  return steps;
}

console.log(mazes(input))
