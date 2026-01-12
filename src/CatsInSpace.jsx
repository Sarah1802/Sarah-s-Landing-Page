import cat3 from '../public/assets/cat3.png'
import cat1 from '../public/assets/cat1.png'
import cat2 from '../public/assets/cat2.png'
import spaceship from '../public/assets/spaceship.png'
import aliencat from '../public/assets/aliencat.png'
import star1 from '../public/assets/star1.png'
import star2 from '../public/assets/star2.png'
import star3 from '../public/assets/star3.png'
import star4 from '../public/assets/star4.png'
import './CatsInSpace.css';

function CatsInSpace() {

    return (
        <div className='flex-container'>
            <div className="art-container">
                {/* spaceship: large movement, same direction */}
                <img src={spaceship} className='art spaceship' data-dx='-17' data-dy='-20' data-depth='15'></img>  

                {/* cats: smaller movement, same direction */}
                <img src={cat1} className='art cat1' data-dx='-12' data-dy='10' data-depth='5'></img>
                <img src={cat2} className='art cat2 ' data-dx='13' data-dy='-12' data-depth='5'></img>
                <img src={cat3} className='art cat3' data-dx='-10' data-dy='15' data-depth='5'></img>

                {/* aliencat: medium movement */}
                <img src={aliencat} className='art aliencat' data-dx='10' data-dy='-10' data-depth='8'></img>

                {/* stars: opposite direction, stronger */}
                <img src={star1} className='art star1 star' data-dx='7' data-dy='-30' data-depth='-12'></img>
                <img src={star2} className='art star2 star' data-dx='14' data-dy='-15' data-depth='-12'></img>
                <img src={star3} className='art star3 star' data-dx='-10' data-dy='25' data-depth='-12'></img>
                <img src={star4} className='art star4 star' data-dx='9' data-dy='-18' data-depth='-12'></img>
            </div>
        </div>
    )
}

export default CatsInSpace;
