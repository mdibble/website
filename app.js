const navSlide = () => {

    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    burger.addEventListener('click', ()=> {
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
    });

    nav.addEventListener('click', ()=> {
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
    });
}

const changeHeader = () => {

    const header_creative = document.getElementById('header-creative');
    const ps = document.getElementById('software_ps');
    const lr = document.getElementById('software_lr');
    const ai = document.getElementById('software_ai');
    const pr = document.getElementById('software_pr');
    const ae = document.getElementById('software_ae');
    const gimp = document.getElementById('software_gimp');
    const c4d = document.getElementById('software_c4d');
    const maya = document.getElementById('software_maya');
    const arnold = document.getElementById('software_arnold');
    const nuke = document.getElementById('software_nuke');
    const houdini = document.getElementById('software_houdini');
    
    ps.addEventListener('mouseover', ()=> { header_creative.innerHTML = "Creative Software like Adobe Photoshop"; });
    lr.addEventListener('mouseover', ()=> { header_creative.innerHTML = "Creative Software like Adobe Photoshop Lightroom"; });
    ai.addEventListener('mouseover', ()=> { header_creative.innerHTML = "Creative Software like Adobe Illustrator"; });
    pr.addEventListener('mouseover', ()=> { header_creative.innerHTML = "Creative Software like Adobe Premiere Pro"; });
    ae.addEventListener('mouseover', ()=> { header_creative.innerHTML = "Creative Software like Adobe After Effects"; });
    gimp.addEventListener('mouseover', ()=> { header_creative.innerHTML = "Creative Software like GIMP"; });
    c4d.addEventListener('mouseover', ()=> { header_creative.innerHTML = "Creative Software like Cinema 4D"; });
    maya.addEventListener('mouseover', ()=> { header_creative.innerHTML = "Creative Software like Autodesk Maya"; });
    arnold.addEventListener('mouseover', ()=> { header_creative.innerHTML = "Creative Software like Arnold"; });
    nuke.addEventListener('mouseover', ()=> { header_creative.innerHTML = "Creative Software like Nuke"; });
    houdini.addEventListener('mouseover', ()=> { header_creative.innerHTML = "Creative Software like Houdini"; });

    ps.addEventListener('pointerleave', ()=> { header_creative.innerHTML = "Creative Software"; });
    lr.addEventListener('pointerleave', ()=> { header_creative.innerHTML = "Creative Software"; });
    ai.addEventListener('pointerleave', ()=> { header_creative.innerHTML = "Creative Software"; });
    pr.addEventListener('pointerleave', ()=> { header_creative.innerHTML = "Creative Software"; });
    ae.addEventListener('pointerleave', ()=> { header_creative.innerHTML = "Creative Software"; });
    gimp.addEventListener('pointerleave', ()=> { header_creative.innerHTML = "Creative Software"; });
    c4d.addEventListener('pointerleave', ()=> { header_creative.innerHTML = "Creative Software"; });
    maya.addEventListener('pointerleave', ()=> { header_creative.innerHTML = "Creative Software"; });
    arnold.addEventListener('pointerleave', ()=> { header_creative.innerHTML = "Creative Software"; });
    nuke.addEventListener('pointerleave', ()=> { header_creative.innerHTML = "Creative Software"; });
    houdini.addEventListener('pointerleave', ()=> { header_creative.innerHTML = "Creative Software"; });
    
    const header_productive = document.getElementById('header-productive');
    const word = document.getElementById('software_word');
    const ppt = document.getElementById('software_ppt');
    const excel = document.getElementById('software_excel');
    const access = document.getElementById('software_access');
    const visio = document.getElementById('software_visio');
    const sharepoint = document.getElementById('software_sharepoint');
    
    word.addEventListener('mouseover', ()=> { header_productive.innerHTML = "Productivity Software like Word"; });
    ppt.addEventListener('mouseover', ()=> { header_productive.innerHTML = "Productivity Software like PowerPoint"; });
    excel.addEventListener('mouseover', ()=> { header_productive.innerHTML = "Productivity Software like Excel"; });
    access.addEventListener('mouseover', ()=> { header_productive.innerHTML = "Productivity Software like Access"; });
    visio.addEventListener('mouseover', ()=> { header_productive.innerHTML = "Productivity Software like Visio"; });
    sharepoint.addEventListener('mouseover', ()=> { header_productive.innerHTML = "Productivity Software like SharePoint"; });

    word.addEventListener('pointerleave', ()=> { header_productive.innerHTML = "Productivity Software"; });
    ppt.addEventListener('pointerleave', ()=> { header_productive.innerHTML = "Productivity Software"; });
    excel.addEventListener('pointerleave', ()=> { header_productive.innerHTML = "Productivity Software"; });
    access.addEventListener('pointerleave', ()=> { header_productive.innerHTML = "Productivity Software"; });
    visio.addEventListener('pointerleave', ()=> { header_productive.innerHTML = "Productivity Software"; });
    sharepoint.addEventListener('pointerleave', ()=> { header_productive.innerHTML = "Productivity Software"; });

    const header_programming = document.getElementById('header-programming');
    const py = document.getElementById('lang_py');
    const c = document.getElementById('lang_c');
    const cpp = document.getElementById('lang_cpp');
    const java = document.getElementById('lang_java');
    const html = document.getElementById('lang_html');
    const css = document.getElementById('lang_css');
    const js = document.getElementById('lang_js');
    const sql = document.getElementById('lang_sql');
    const vba = document.getElementById('lang_vba');
    
    py.addEventListener('mouseover', ()=> { header_programming.innerHTML = "Programming in Python"; });
    c.addEventListener('mouseover', ()=> { header_programming.innerHTML = "Programming in C"; });
    cpp.addEventListener('mouseover', ()=> { header_programming.innerHTML = "Programming in C++"; });
    java.addEventListener('mouseover', ()=> { header_programming.innerHTML = "Programming in Java"; });
    html.addEventListener('mouseover', ()=> { header_programming.innerHTML = "Programming in HTML"; });
    css.addEventListener('mouseover', ()=> { header_programming.innerHTML = "Programming in CSS"; });
    js.addEventListener('mouseover', ()=> { header_programming.innerHTML = "Programming in JavaScript"; });
    sql.addEventListener('mouseover', ()=> { header_programming.innerHTML = "Programming in SQL"; });
    vba.addEventListener('mouseover', ()=> { header_programming.innerHTML = "Programming in VBA"; });

    py.addEventListener('pointerleave', ()=> { header_programming.innerHTML = "Programming"; });
    c.addEventListener('pointerleave', ()=> { header_programming.innerHTML = "Programming"; });
    cpp.addEventListener('pointerleave', ()=> { header_programming.innerHTML = "Programming"; });
    java.addEventListener('pointerleave', ()=> { header_programming.innerHTML = "Programming"; });
    html.addEventListener('pointerleave', ()=> { header_programming.innerHTML = "Programming"; });
    css.addEventListener('pointerleave', ()=> { header_programming.innerHTML = "Programming"; });
    js.addEventListener('pointerleave', ()=> { header_programming.innerHTML = "Programming"; });
    sql.addEventListener('pointerleave', ()=> { header_programming.innerHTML = "Programming"; });
    vba.addEventListener('pointerleave', ()=> { header_programming.innerHTML = "Programming"; });

    const header_tech = document.getElementById('header-tech');
    const git = document.getElementById('tech_git');
    const mysql = document.getElementById('tech_mysql');
    const azure = document.getElementById('tech_azure');
    
    git.addEventListener('mouseover', ()=> { header_tech.innerHTML = "Technologies like Git"; });
    mysql.addEventListener('mouseover', ()=> { header_tech.innerHTML = "Technologies like MySQL"; });
    azure.addEventListener('mouseover', ()=> { header_tech.innerHTML = "Technologies like Azure"; });

    git.addEventListener('pointerleave', ()=> { header_tech.innerHTML = "Technologies"; });
    mysql.addEventListener('pointerleave', ()=> { header_tech.innerHTML = "Technologies"; });
    azure.addEventListener('pointerleave', ()=> { header_tech.innerHTML = "Technologies"; });

    const header_next = document.getElementById('header-next');
    const react = document.getElementById('next_react');
    const rust = document.getElementById('next_rust');
    const tensorflow = document.getElementById('next_tensorflow');
    
    react.addEventListener('mouseover', ()=> { header_next.innerHTML = "Eager to Learn React"; });
    rust.addEventListener('mouseover', ()=> { header_next.innerHTML = "Eager to Learn Rust"; });
    tensorflow.addEventListener('mouseover', ()=> { header_next.innerHTML = "Eager to Learn TensorFlow"; });

    react.addEventListener('pointerleave', ()=> { header_next.innerHTML = "Eager to Learn"; });
    rust.addEventListener('pointerleave', ()=> { header_next.innerHTML = "Eager to Learn"; });
    tensorflow.addEventListener('pointerleave', ()=> { header_next.innerHTML = "Eager to Learn"; });
}

navSlide();
changeHeader();