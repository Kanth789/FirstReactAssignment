import logo from './logo.svg';
import './App.css';
import {v4 as uuidv4} from 'uuid'
import Emoji from './Components/Emoji';

const ImagesList = [
    {
      uniqueNo:  uuidv4(),
        emojiName: 'Face with stuck out tongue',
        emojiUrl:"https://freepngimg.com/thumb/emoji/3-2-love-hearts-eyes-emoji-png-thumb.png",
    },
    {
      uniqueNo:  uuidv4(),
        emojiName: 'Face with stuck out tongue',
        emojiUrl:
          'https://freepngimg.com/thumb/emoji/5-2-face-with-tears-of-joy-emoji-png-thumb.png',
      },
      {
        uniqueNo:  uuidv4(),
        emojiName: 'Face with head bandage',
        emojiUrl:
          'https://freepngimg.com/thumb/emoji/4-2-smiling-face-with-sunglasses-cool-emoji-png-thumb.png',
      },
      {
        uniqueNo:  uuidv4(),
        emojiName: 'Face with hugs',
        emojiUrl: 'https://freepngimg.com/thumb/emoji/1-2-wink-emoji-png-thumb.png',
      },
      {
        uniqueNo:  uuidv4(),
        emojiName: 'Face with laughing',
        emojiUrl:
          'https://freepngimg.com/thumb/emoji/47426-8-smiley-hd-free-transparent-image-hd-thumb.png',
      },
      {
        uniqueNo:  uuidv4(),
        emojiName: 'Laughing face with hand in front of mouth',
        emojiUrl:
          'https://freepngimg.com/thumb/emoji/65088-emoticon-piracy-smiley-pirate-emoji-png-image-high-quality-thumb.png',
      },
      {
        uniqueNo:  uuidv4(),
        emojiName: 'Face with mask',
        emojiUrl: 'https://freepngimg.com/thumb/emoji/73723-emoticon-smiley-sticker-honda-up-amaze-thumbs-thumb.png',
      },
      {
        uniqueNo:  uuidv4(),
        emojiName: 'Face with silence',
        emojiUrl:
          'https://freepngimg.com/thumb/emoji/6-2-angel-blushing-smile-emoji-png-thumb.png',
      },
      {
        uniqueNo:  uuidv4(),
        emojiName: 'Face with stuck out tongue and winked eye',
        emojiUrl:
          'https://freepngimg.com/thumb/emoji/65057-emoticon-signal-smiley-thumb-emoji-free-frame-thumb.png',
      },
      {
        uniqueNo:  uuidv4(),
        emojiName: 'Grinning face with sweat',
        emojiUrl:
          'https://freepngimg.com/thumb/emoji/9-2-tongue-out-emoji-png-thumb.png',
      },
      {
        uniqueNo:  uuidv4(),
        emojiName: 'Smiling face with heart eyes',
        emojiUrl:
          'https://freepngimg.com/thumb/emoji/11-2-loudly-crying-emoji-png-thumb.png',
      },
      {
        uniqueNo:  uuidv4(),
        emojiName: 'Grinning face',
        emojiUrl: 'https://freepngimg.com/thumb/emoji/8-2-fearful-emoji-png-thumb.png',
      },
     
    
]
const App = () => <Emoji ImagesList={ImagesList} />

export default App;
