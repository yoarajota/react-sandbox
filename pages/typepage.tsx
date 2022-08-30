import { useState } from 'react';

export default function TsxPage() {
  const [MESSAGE, SETMESSAGE] = useState<string>('Teste');


  function doSomething(e: any) {
    e.preventDefault();

    SETMESSAGE(3);
    // SETMESSAGE('3')
  }

  return (
    <div>
      <form>
        <input type='textarea' onChange={(e) => { SETMESSAGE(e.target.value) }} />
      </form>
      <form>
        <button placeholder='aaaaaaaaaa' onClick={(event: any) => doSomething(event)} style={{ width: '500px', height: '20px' }} />
      </form>
      {MESSAGE}
      <br />
      <br />
      <br />
      <br />
      {MESSAGE && typeof MESSAGE}
    </div>
  )
}
