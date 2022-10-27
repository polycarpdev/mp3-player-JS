


const musicContainer = document.querySelector('.music-container')
const playBtn = document.querySelector('#play')
const  prevBtn= document.querySelector('#prev')
const nextBtn = document.querySelector('#next')
const audio = document.querySelector('#audio')
const progress = document.querySelector('.progress')
const progressContainer = document.querySelector('.progress-container')
const title = document.querySelector('#songtitle')

const artiste = document.querySelector('#artiste')
const cover = document.querySelector('#cover')
totalstreams = 0
if (nextSong) {
    totalstreams+=1
}


// song titles
const songs = ['Uzuri Wako[Instrumental]', 'Uzuri Wako']
const artistes = ['polycarp', 'polycarp ft Markie' ]

// keep track of songs
let songIndex = 0
let artisteIndex = 0

// initially load songs to DOM
loadSong(songs[songIndex])
loadArtiste(artistes[artisteIndex])

// update song details
function loadSong(song){
    title.innerText = (songIndex + 1)+'. ' + song
    audio.src = `songlist/${song}.mp3`
    // cover.src = `${song}.jpg`
}

function loadArtiste(msanii){
    artiste.innerText = msanii
}
function playSong (){
    document.getElementById('body').animation = 'movinggradient 5s  infinite'
    musicContainer.classList.add('play')
    playBtn.querySelector('i.fas').classList.remove('fa-play')
    playBtn.querySelector('i.fas').classList.add('fa-pause')
    audio.play()
    

}


function pauseSong (){
    musicContainer.classList.remove('play')
    playBtn.querySelector('i.fas').classList.add('fa-play')
    playBtn.querySelector('i.fas').classList.remove('fa-pause')
    audio.pause()
}

function prevSong(){
    songIndex--
    artisteIndex--
    if (songIndex < 0 && artisteIndex < 0) {
        songIndex = songs.length - 1
        artisteIndex = artistes.length -1
    }
    loadArtiste(artistes[artisteIndex])
    loadSong(songs[songIndex])
    playSong()
}

function nextSong(){
    songIndex++
    artisteIndex++
    if ((songIndex > songs.length - 1) && (artisteIndex > artistes.length -1)) {
        songIndex = 0
        artisteIndex = 0
    }
    loadSong(songs[songIndex])
    loadArtiste(artistes[artisteIndex])

    playSong()
}

function updateProgress(e) {
    const {duration, currentTime } = e.srcElement
    const progressPercent = (currentTime/duration) *100
    progress.style.width = `${progressPercent}%`
}

function setProgress(e){
    const width = this.clientWidth
    const clickX = e.offsetX
    const duration = audio.duration

    audio.currentTime = (clickX/width ) *duration
}  
// event listeners
playBtn.addEventListener('click', () =>{
    const playing = musicContainer.classList.contains('play')

    if(playing){
        pauseSong()
    }
    else{
        playSong()
    }
})

prevBtn.addEventListener('click', prevSong  )
nextBtn.addEventListener('click', nextSong  )

audio.addEventListener('timeupdate', updateProgress)

progressContainer.addEventListener('click', setProgress)

audio.addEventListener('ended', nextSong)

// VOLUME
//initializing volume

function vol() {

    var a = document.getElementById('audio')
    var slider = 0 + "." +document.getElementById('changeVol').value;
    a.volume = slider;
}



function addStreams() {
    document.getElementById('streams').innerHTML = totalstreams
}

