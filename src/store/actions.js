export const SCROL_PAGE= "SCROL_PAGE"

export const scrollPage = (home,about,work, education,skills,portfilio,refrence) => {
    return {
        type: SCROL_PAGE,
        home : home,
        about: about,
        work:work,
        education: education,
        skills:skills,
        portfilio: portfilio,
        refrence:refrence

    };
};
