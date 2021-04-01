import {useState} from 'react';
import {
	Form,
	TextArea,
} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import axios from 'axios';

export const Core = () => {
  const [text, setText] = useState('');
  const [convertedText, setConvertedText] = useState('');

  const onChangeText = (event: any) => setText(event.target.value);
  const onChangeConvertedText = (s: any) => setConvertedText(s);

  const onChange = (event: any) => {
    onChangeText(event)

    const API_URL = "http://localhost:8080/blockissues"
    const data = { body: text }
    axios.post(API_URL, data)
      .then(res => {
        onChangeConvertedText(res.data.body)
      })
      .catch((data) => {
      console.log(data)
    })
  }

  return (
    <div>
      <div className="ui stackable two column grid">
        <div className="column">
          <Form>
            <TextArea
              onChange={onChange}
              placeholder="ここにテキストを入力"
              value={text}
              rows="30"/>
          </Form>
        </div>
        <div className="column">
          {/* <Dimmer active={this.state.loading}>
            <Loader inverted>変換中</Loader>
          </Dimmer> */}
          <Form>
            <TextArea
              placeholder="ここに変換後のテキストが表示されます"
              value={convertedText}
              rows="30"/>
          </Form>
        </div>
      </div>
    </div>
  )
}
