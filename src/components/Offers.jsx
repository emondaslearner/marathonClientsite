import React from 'react';
import offerImg1 from '../images/Vector.svg'
import offerImg2 from '../images/Vector (1).svg'
import offerImg3 from '../images/Vector (2).svg'
import offerImg4 from '../images/Vector (3).svg'

const Offers = () => {
    return (
        <div className='marathonOffer'>
            <h1>Benefits offered by Chinmaya Mission</h1>
            <div className="offers">
                <div className='offer'>
                    <div>
                        <img src={offerImg1} alt="" />
                    </div>
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit eu consequat eros, dolor sit pellentesque sapien. Tortor lectus integer morbi erat. </p>
                    </div>
                </div>
                <div className='offer'>
                    <div>
                        <img src={offerImg2} alt="" />
                    </div>
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit eu consequat eros, dolor sit pellentesque sapien. Tortor lectus integer morbi erat. </p>
                    </div>
                </div>
                <div className='offer'>
                    <div>
                        <img src={offerImg3} alt="" />
                    </div>
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit eu consequat eros, dolor sit pellentesque sapien. Tortor lectus integer morbi erat. </p>
                    </div>
                </div>
                <div className='offer'>
                    <div>
                        <img src={offerImg4} alt="" />
                    </div>
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit eu consequat eros, dolor sit pellentesque sapien. Tortor lectus integer morbi erat. </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offers;