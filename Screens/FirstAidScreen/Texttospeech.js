import Tts from 'react-native-tts'

export function TTSpeech(entry){
    Tts.stop()
    Tts.setDefaultLanguage('en-US');
    Tts.speak(entry)
}
export function TTStop(){
    Tts.stop()
}
export function TTSpeechSol(entry){
    Tts.stop()
    Tts.setDefaultLanguage('fil-PH').then((status) => {
        alert(status)
    }, (err)=> {
        // alert(err.code)
    })
    
    Tts.getInitStatus().then((status) => {
        // ...
        // alert(status)
      }, (err) => {
          alert(err.code)
        if (err.code === 'no_engine') {
          alert('waw')
        }
      });
      Tts.speak("Step 1")
}
