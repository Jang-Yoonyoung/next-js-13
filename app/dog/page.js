// 강아지 페이지 (/dog)
// UI 구성 및 데이터 페칭
// 화면 표시

export default async function DogPage() {
  try {
    const data = await fetch("http://localhost:3001/api/dog")
    .then((res) => res.json())

    return (
      <div className="items-center justify-center gap-5 whiteBox-primary h-[40em]">
        <h2 className="text-3xl font-semibold">Dog</h2>
        <p className="text-1xl">{data.message}</p>
        <img src={data.image} className="w-[25em]"/>
      </div>
    )
  } catch (error) {
    // 오류가 발생했을 때 실행되는 코드
    console.error('An error occurred:', error.message);
  }
};