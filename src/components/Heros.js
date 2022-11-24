export default function Heros() {
    return (
        <section className="Heros">
            <div className="gallery">
                <div className="HolderImage">
                    <figure className="gallery-item2">
                        <img src={require("../images/image 28.png")} alt="photo" />
                    </figure>
                </div>
                <div className="HolderImage">
                    <figure className="gallery-item3">
                        <img src={require("../images/image 30.png")} alt="photo" />
                    </figure>
                    <figure className="gallery-item4">
                        <img src={require("../images/image 26.png")} alt="photo" />
                    </figure>
                </div>
                <div className="HolderImage">
                    <figure className="gallery-item5">
                        <img src={require("../images/image 27.png")} alt="photo" />
                    </figure>
                    <figure className="gallery-item6">
                        <img src={require("../images/image 29.png")} alt="photo" />
                    </figure>
                </div>
                <div className="HolderImage">
                    <figure className="gallery-item7">
                        <img src={require("../images/image 22.png")} alt="photo" />
                    </figure>
                    <figure className="gallery-item8">
                        <img src={require("../images/image 23.png")} alt="photo" />
                    </figure>
                </div>
                <div className="HolderImage">
                    <figure className="gallery-item9">
                        <img src={require("../images/image 25.png")} alt="photo" />
                    </figure>
                    <figure className="gallery-item10">
                        <img src={require("../images/image 24.png")} alt="photo" />
                    </figure>
                </div>
            </div>
            <div className="container">
                <h1>Online Experiences</h1>
                <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            </div >
        </section>
    )
};