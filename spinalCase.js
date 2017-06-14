function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins

  return str.split(/\s|_|(?=[A-Z])/).join('-').toLowerCase()
}


//@return this-is-spinal-tap
spinalCase("This Is Spinal Tap")

//return the-andy-griffith-show
spinalCase('The_Andy_Griffith_Show')
