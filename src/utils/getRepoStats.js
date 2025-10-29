import axios from 'axios';

async function getRepoStats () {
    const res = await axios.get('https://api.github.com/repos/gokhankkaraduman/NeuroLift/languages');
    const data = await res.data;

    const totalBytes = Object.values(data).reduce((sum, bytes) => sum + bytes, 0);
    const totalLines = Math.round(totalBytes / 50);
    
    return { totalLines, languages: data };
}

export default getRepoStats;