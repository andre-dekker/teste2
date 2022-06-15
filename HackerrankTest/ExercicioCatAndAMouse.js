function catAndMouse(x, y, z) {
var catA = x
var catB = y
var Mouse = z
if(Math.abs(Mouse - catA) < Math.abs(Mouse - catB)){
   return 'Cat A'
} else if(Math.abs(Mouse - catA) > Math.abs(Mouse - catB)){
   return 'Cat B'
} else {
   return 'Mouse C'
}
}
catAndMouse(1, 5000, 900)