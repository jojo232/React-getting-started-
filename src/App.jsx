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

  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwichShowFlag = () => {
    setfaceShowFlag(!faceShowFlag);
  };
  
  // このコードは、Reactの関数コンポーネントである App を定義しています。
  
// このコンポーネントでは、useState フックを使用して、状態変数 num と faceShowFlag を定義しています。
// useState フックは、状態変数の初期値を設定するために使用されます。
// を定義しています。これらの関数は、ボタンがクリックされたときに状態変数を変更するために使用されます。具体的には、setNum 関数を使用して num の値をインクリメントすることができます。
// 同様に、setfaceShowFlag 関数を使用して、 faceShowFlag の真偽値を反転させることができます。

// useStateとは、コンポーネント内で動的に変更される値を格納するための状態変数を定義することができます。
// useState フックは、2つの値を返します。1つ目の値は現在の状態の値、2つ目の値は現在の状態を変更するための関数です。状態変数の初期値を引数として渡すことができます。


  
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
