
import one from "../gallery/one.jpeg"
import two from "../gallery/two.jpeg"
import three from "../gallery/three.jpeg"
import four from "../gallery/four.jpeg"
import five from "../gallery/five.jpeg"
import six from "../gallery/six.jpeg"
import seven from "../gallery/seven.jpeg"
import eight from "../gallery/eight.jpeg"




function Gallery() {
    return (
      <div className='image'>
        <div className="section-1">
          <div className='one'>
            <img src={one} alt="image1" />
            <p>Elon Musk</p>
          </div>
  
          <div className='one'>
            <img src={two} alt="image2" />
            <p>Jeff Bezos</p>
          </div>
  
          <div className='one'>
            <img src={three} alt="image3" />
            <p>Mark Zuckerberg</p>
          </div>
  
          <div className='one'>
            <img src={four} alt="image4" />
            <p>Bernard Arnault</p>
          </div>
        </div>
  
        <div className="section-2">
          
        <div className='one'>
            <img src={five} alt="image5" />
            <p>Larry Ellison</p>
          </div>
  
          <div className='one'>
            <img src={six} alt="image6" />
            <p>Bill Gates</p>
          </div>
  
          <div className='one'>
            <img src={seven} alt="image7" />
            <p>Larry Page</p>
          </div>
  
          <div className='one'>
            <img src={eight} alt="image8" />
            <p>Warren Buffett</p>
          </div>
        </div>
      </div>
    );
  }

  export default Gallery
  