import { Message } from 'semantic-ui-react'

export const DescriptionArea = () => {
  return (
    <Message>
      <Message.Header>What is this?</Message.Header>
      <p>#NNNNN を識別して、その issue の 子issue のみ完了動作確認を抽出します</p>
      <p>リリースノート作成くんでできあがったリリースノートをはりつけてね</p>
    </Message>
  )
}

