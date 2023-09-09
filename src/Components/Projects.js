import "./Project.css"
function Projects(){
    return(
        <>
        <h2>Projects</h2>
        <div className="my-5" id="projects">
        <section id="gallery" className="p-2 mt-5">
        <div className="container mt-5 mx-auto py-12">
        <div className="grid">
        <div style={{ gridRow: 1, gridColumn: "1/4", background: "#fca" }}>
            <img src="https://source.unsplash.com/550x335/?sunset" />
        </div>
        <div style={{ gridRow: 1, gridColumn: "4/6" }}>
            <img src="https://source.unsplash.com/300x335/?river" />
        </div>
        <div style={{ gridRow: 1, gridRowEnd: 3, gridColumn: "6/8" }}>
            <img src="https://source.unsplash.com/415x670/?flower" />
        </div>
        <div style={{ gridRow: 1, gridColumn: "9/16" }}>
            <img src="https://source.unsplash.com/300x335/?snow" />
        </div>
        <div style={{ gridRow: 2, gridColumn: "1/3" }}>
            <img src="https://source.unsplash.com/300x335/?mountains" />
        </div>
        <div style={{ gridRow: 2, gridColumn: "3/6" }}>
            <img src="https://source.unsplash.com/550x335/?food" />
        </div>
        <div style={{ gridRow: 2, gridColumn: "9/16" }}>
            <img src="https://source.unsplash.com/300x335/?party,lights" />
        </div>
        </div>
    </div>
    </section>

        </div>
        </>
    );
}
export default Projects;