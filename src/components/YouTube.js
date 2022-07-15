import { useState, useEffect } from "react"

const YouTube = ({ id }) => {
	const [title, setTitle] = useState("")
	const apiKey = "AIzaSyAz5H5pZRyvOaHtdtFavvV-ieHQfqd2E_Y"

	useEffect(() => {
		fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${id}&fields=items(id%2Csnippet)&key=${apiKey}`)
		.then(response => response.json())
		.then(response => response.items)
		.then(response => {
			setTitle(response[0].snippet.title)
		})
	}, [id])

	return (
		<iframe
			src={`https://www.youtube.com/embed/${id}`}
			srcDoc={`<style>*{padding:0;margin:0;box-sizing:border-box;overflow:hidden}body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}div{position:absolute;bottom:0;left:0;width:100%;padding:10px 15px;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;background-color:rgba(0,0,0,0.85)}a{color:white;}</style><a href=https://www.youtube.com/embed/${id} alt="${title}"><img src=https://img.youtube.com/vi/${id}/hqdefault.jpg><span>&#x25BA;</span><div>${title}</div></a>`}
			frameBorder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			title={title}
			allowFullScreen
		></iframe>
	)
}

export default YouTube