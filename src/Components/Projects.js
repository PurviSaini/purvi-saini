import "./Project.css"
function Projects(){
    return(
        <>
        <h2>Projects</h2>
        <div className="p-2 my-5 d-flex justify-content-center align-items-center flex-wrap" id="projects">
        <div className=" col-md-4 img-container p-4">
        <div className="bg"></div>
        <img src="https://d112y698adiu2z.cloudfront.net/photos/production/software_thumbnail_photos/002/541/020/datas/medium.png" className="img-fluid" alt="profile" style={{borderRadius:"10px"}} useMap="#teamhub" />
        </div>
        <map name="teamhub">
        <area shape="rect" coords="0,0,500,500" href="https://github.com/PurviSaini/TeamHub" target="_blank" alt="githb repo" />
        </map>

        <div className=" col-md-4 img-container p-4">
        <div className="bg"></div>
        <img src="https://d112y698adiu2z.cloudfront.net/photos/production/software_thumbnail_photos/002/555/520/datas/medium.png" className="img-fluid" alt="profile" style={{borderRadius:"10px"}} useMap="#reporeport" />
        </div>
        <map name="reporeport">
        <area shape="rect" coords="0,0,500,500" href="https://github.com/PurviSaini/RepoReport" target="_blank" alt="githb repo" />
        </map>

        <div className=" col-md-4 img-container p-4">
        <div className="bg"></div>
        <img src="https://d112y698adiu2z.cloudfront.net/photos/production/software_thumbnail_photos/002/266/935/datas/medium.png" className="img-fluid" alt="profile" style={{borderRadius:"10px"}} useMap="#carbo" />
        </div>
        <map name="carbo">
        <area shape="rect" coords="0,0,500,500" href="https://github.com/PurviSaini/CARbo" target="_blank" alt="githb repo" />
        </map>

        <div className=" col-md-4 img-container p-4">
        <div className="bg"></div>
        <img src="https://d112y698adiu2z.cloudfront.net/photos/production/software_thumbnail_photos/002/350/625/datas/medium.png" className="img-fluid" alt="profile" style={{borderRadius:"10px"}} useMap="#healthyme" />
        </div>
        <map name="healthyme">
        <area shape="rect" coords="0,0,500,500" href="https://github.com/PurviSaini/Healthy-Me" target="_blank" alt="githb repo" />
        </map>

        <div className=" col-md-4 img-container p-4">
        <div className="bg"></div>
        <img src=" https://d112y698adiu2z.cloudfront.net/photos/production/software_thumbnail_photos/002/332/300/datas/medium.png" className="img-fluid" alt="profile" style={{borderRadius:"10px"}} useMap="#quizeria" />
        </div>
        <map name="quizeria">
        <area shape="rect" coords="0,0,500,500" href="https://github.com/PurviSaini/Design-a-thon" target="_blank" alt="githb repo" />
        </map>

        </div>
        </>
    
    );
}
export default Projects;