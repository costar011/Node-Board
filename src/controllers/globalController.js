import { firestore } from "../firebase";

export const home = async (req, res) => {
  let doData = [];

  try {
    await firestore
      .collection("board")
      .get()
      .then(docs => {
        docs.forEach(doc => {
          doData.push({
            id: doc.id,
            task: doc.data().do
          });
        });
      });
  } catch (error) {
    console.log(error);
  }

  console.log(doData);

  res.render("home", { doData });
};

export const addDo = async (req, res) => {
  const {
    body: { txt }
  } = req;

  try {
    await firestore.collection("do").add({
      do: txt
    });
  } catch (error) {
    console.log(error);
    console.log("파이어베이스 넣기 실패.");
  }

  let doData = [];

  try {
    await firestore
      .collection("do")
      .get()
      .then(docs => {
        docs.forEach(doc => {
          doData.push({
            id: doc.id,
            task: doc.data().do
          });
        });
      });
  } catch (error) {
    console.log(error);
  }
  res.render("home", { doData });
};

export const remove = async (req, res) => {
  const {
    body: { taskId }
  } = req;

  console.log("삭제할 아이디는 :" + taskId + "이다.");

  try {
    await firestore
      .collection("do")
      .doc(taskId)
      .delete();
  } catch (error) {
    console.log("데이터삭제 실패");
    console.log(error);
  }

  home(req, res);
};
