------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
import React, { useEffect, useState } from "react";
import ColofulMessage from "./components/ColorfulMessage";

// Reactとその他のモジュールから必要な関数をインポートしている部分です。

// 1つ目の行では、Reactライブラリから useEffect と useState という2つの関数をインポートしています。
// これらはReact Hooksの機能であり、関数コンポーネントで状態管理や副作用の実行を行うために使用されます。

// 2つ目の行では、別のファイルにある ColorfulMessage コンポーネントをインポートしています。 
// ./components/ColorfulMessage のように相対パスで指定されているため、同じディレクトリ内にある ColorfulMessage.js というファイルをインポートしていると推測されます。
---------------------------------------------------------------------------------------

  
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const App = () => {
  console.log("さいしょ");
  const [num(現在の状態の値), setNum(現在の状態を変更)] = useState(0); //初期値 = 0 , //状態変数の初期値を引数として渡すことができる
  const [faceShowFlag, setfaceShowFlag] = useState(false);
  
  // useState(false); = 初期値として false を持つ状態変数を定義しています。
  // この状態変数は、 faceShowFlag という名前で定義されています。
  // この状態変数は false で初期化され、初めに画面が表示されたときには、顔は非表示になっています

  const onClickCountUp = () => {
    setNum(num + 1);
  };
  // このコードは、関数コンポーネント内にあるボタンをクリックしたときに num ステートを更新するためのコードです。
  // onClickCountUp 関数の中で、 setNum を使って num ステートを更新しています。
  // setNum 関数には、現在の num ステートに 1 を加えた値を渡すことで、現在のステートに 1 を加えた新しい値をセットしています。
  // これにより、ボタンがクリックされるたびに num の値が 1 加算され、<ColorfulMessage> コンポーネントに表示される文字列の色が変わるようになります。
  
  const onClickSwichShowFlag = () => {
    setfaceShowFlag(!faceShowFlag);
  };
  // このコードは、関数コンポーネント内にあるボタンをクリックしたときに faceShowFlag ステートを更新するためのコードです。
  // onClickSwichShowFlag 関数の中で、 setfaceShowFlag を使って faceShowFlag ステートを更新しています。
  // setfaceShowFlag 関数には、現在の faceShowFlag ステートの反対の値を渡すことで、現在のステートの反転を行っています。
  // これにより、ボタンがクリックされるたびに faceShowFlag の値が切り替わり、<ColorfulMessage> コンポーネントが表示されたり非表示になったりするようになります。
  
  
// このコードは、Reactの関数コンポーネントである App を定義しています。
  
// このコンポーネントでは、useState フックを使用して、状態変数 num と faceShowFlag を定義しています。
// useState フックは、状態変数の初期値を設定するために使用されます。
// を定義しています。これらの関数は、ボタンがクリックされたときに状態変数を変更するために使用されます。具体的には、setNum 関数を使用して num の値をインクリメントすることができます。
// 同様に、setfaceShowFlag 関数を使用して、 faceShowFlag の真偽値を反転させることができます。

// useStateとは、コンポーネント内で動的に変更される値を格納するための状態変数を定義することができます。
// useState フックは、2つの値を返します。1つ目の値は現在の状態の値、2つ目の値は現在の状態を変更するための関数です。状態変数の初期値を引数として渡すことができます
---------------------------------------------------------------------------------------
  
  
  // 最初の一回だけ走らせたいときは、useEffectmを使用する
  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setfaceShowFlag(true);
      } else {
        faceShowFlag && setfaceShowFlag(false);
      }
    }
  }, [num]);

  return (
    <>
      <h1 style={{ color: `red` }}>こんにちは！</h1>
      <ColofulMessage color="blue">お元気ですか？</ColofulMessage>
      <ColofulMessage color="pink">元気です！</ColofulMessage>
      <button onClick={onClickCountUp}>カウントアップ！</button>
      <br />
      <button onClick={onClickSwichShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>(^ ^)</p>}
    </>
  );
};

//　他でも使用できるようになる
export default App;

// 論理演算子で知ろうに使われていた,{faceShowFlag && <p>(^ ^)</p>}
