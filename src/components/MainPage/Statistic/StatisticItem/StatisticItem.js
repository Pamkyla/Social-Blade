import React from 'react';

import Chart from '../../../Chart';

class StatisticItem extends React.Component {

    state = {
        data: []
    }



    render() {

        function fspboverlay() {
            let fspboverlay = document.getElementById("fspboverlay");
            let closeBtn = document.getElementById("CloseBtn");
            let popup = document.getElementById("popup-banner");
            fspboverlay.addEventListener('click', closePopup);
            closeBtn.addEventListener('click', closePopup);
            fspboverlay.style.display = "block";
            popup.style.display = "flex";
            sessionStorage.setItem('AnnouncementOnce', 'true');

            function closePopup() {
                let fspboverlay = document.getElementById("fspboverlay");
                let popup = document.getElementById("popup-banner");
                fspboverlay.style.display = "none";
                popup.style.display = "none";
            }

        }


        const { element } = this.props;

        return (
            <>
                <div class="popup">
                    <div id="fspboverlay"></div>
                    <div id="popup-banner">
                        <div class="popup-banner">
                            <img class="popup-image" src="" alt="Лучи добра" width="800" height="544"></img>
                            <button id="CloseBtn"></button>
                            <div class="banner-readme">
                                
                            </div>
                        </div>
                    </div>
                </div>

                <span onClick={fspboverlay} >{element.caption}</span>
                {/* <p>  {element.date}  </p> */}
                <p><Chart url={element} /></p>
            </>
        )
    }
}

export default StatisticItem;