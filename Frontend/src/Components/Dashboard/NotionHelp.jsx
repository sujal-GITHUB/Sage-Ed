import {useState} from 'react'
import EditorComponent from './Notion/EditorComponent'

const NotionHelp = () => {
  const [notes, setNotes] = useState([]);

  const saveNote = (data) => {
    setNotes([...notes, data]);
    console.log("Saved Note:", data); 
    setNotes([]);
    // call api to send data in backend
  };

  const data = {
    time: 1552744582955,
    blocks: [
      {
        type: "header",
        data: {
          text: "Hello how are you"
        }
      }
    ],
    version: "2.11.10"
  }

  return (
    <div className="w-full h-[calc(100vh-80px)]">
      <div className="h-full bg-white border-2 border-black rounded-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
        <EditorComponent initialData={data} onSave={saveNote} />

        {/* <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Saved Notes</h2>
          {notes.map((note, index) => (
            <pre key={index} className="p-4 bg-gray-200 rounded-md">
              {JSON.stringify(note, null, 2)}
            </pre>
          ))}
        </div> */}
      </div>
    </div>
  )
}

export default NotionHelp