import "./template.scss";


const Template = ({gallery, text1, text2, text3, text4, services, video}) => {
  return (
    <div className="templates">
      <div data-aos="fade-right" className="topish">
        <div className="lefti">
          <p className="title">{text1}</p><br />
          <p className="title">
            {text2}
          </p><br />
          <p className="title">
            {text3}
          </p><br />
          <p className="title">
           {text4}
          </p>
        </div>
        <div className="righti">
          <p className="lab">What We Do</p><br />
          <ul>
            {services.map((i, index) => {
              return (
                <li key={index}>{i}</li>
              )
            })}
          </ul>
        </div>
      </div>
      <div className="gallery">
            {gallery.map((i, index) => {
              return (
                <img data-aos="fade-up" key={index} src={i} alt="gallery_image" />
              )
            })}

        {video?.length && 
        video.map((i, index) => {
          return (
            <video data-aos="fade-up" key={index} autoPlay loop src={i}></video>
          )
        })
        }
      </div>
     

    </div>
  );
};

export default Template;
