// Make it so that the initialize function can only be called once!
// Done
// Said try make the person not able to get around by assigning it again. My try may not be right way, but it does work, I'll keep an eye out for the correct way to do this.
let view
let inited = false

const initialize = () => {
   let seen = false
   if (!inited) {
      inited = true
      
      return () => {
         if (!seen) {
            seen = true
            view = '🏔';
            return console.log('view has been changed!')
         }
         console.log('You already changed it!')
      }
   } else 
      console.log("You can't create this more then once")
      return () => {}
}

const init = initialize();

init();
init();
init();
const init2 = initialize();
init2();

console.log(view);
