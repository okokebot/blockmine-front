import React from 'react';
import {
	Form,
	TextArea,
} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

export default class Core extends React.Component {
	render() {
		return (
			<div>
        <div className="ui stackable two column grid">
					<div className="column">
						<Form>
							<TextArea
								// onChange={this.onTextChange}
								placeholder="ここにテキストを入力"
								// value={this.state.text}
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
                // value={this.state.convertedText}
								rows="30"/>
						</Form>
					</div>
				</div>
			</div>
		)
	}
}
