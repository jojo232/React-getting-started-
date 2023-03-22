# Pops
### コンポーネント
・画面要素の1単位。大(1画面)から小(1つもテクストボックス)まで様々。
### Props
・コンポーネントに渡される引数的なもの</br>
### State
・各コンポーネントが持つ状態。Stateが変更されると再レンダリングされる。</br>
<img width="100" alt="スクリーンショット 2022-08-26 17 33 48" src="https://user-images.githubusercontent.com/65487059/226085749-6514db4a-30bb-45b8-bddc-01da309bff26.jpeg"></br>
<img width="100" alt="スクリーンショット 2022-08-26 17 33 48" src="https://user-images.githubusercontent.com/65487059/226090825-fba68743-ac68-49f0-864f-5046c3ee66bc.jpeg">

#　再レンダリングが起きる条件
・　stateが更新されたコンポーネントは再レンダリング　　<br>
・　propsが変更されたコンポーネントは再レンダリング<br>
・　再レンダリングされたコンポーネント配下の子要素は再レンダリング<br>
