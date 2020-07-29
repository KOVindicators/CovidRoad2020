import { renderHeader } from '../render.js';
import { getUser } from '../utils.js';
// import levels from '../data/levels.js';

const user = getUser();
const headerEl = document.querySelector('header');
const { ulLeftEl, ulCenterEl, ulRightEl } = renderHeader(user);
headerEl.append(ulLeftEl, ulCenterEl, ulRightEl);


{/* <h2 class="level">RESULTS</h2>
<section class="image-box">
     <img src ="../assets/doctor.png" width = "75px" />
        <div id="avatar">
    </div> 
</section>
<section class="main-section">
    <div class="results-win">
    RESULTS-WIN! 
    <img src="" />
    <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti temporibus sequi fugiat doloribus iste, quia totam, modi, id quam magnam molestias maiores alias aperiam sapiente laudantium voluptas doloremque delectus possimus!</div>
    </div>

    <div class="results-lose">
    RESULTS-LOSE!
    <img src="" />
    <div >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti temporibus sequi fugiat doloribus iste, quia totam, modi, id quam magnam molestias maiores alias aperiam sapiente laudantium voluptas doloremque delectus possimus!</div>
      <!-- has hidden elements depending on the USERresults -->
    </div>
    <button class="glow" type="reset">START AGAIN</button>
</section> */}
