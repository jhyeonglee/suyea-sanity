// schemaTypes/about.js
export default {
    name: 'about',
    title: '회사 소개 설정',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: '회사 소개 한줄 타이틀',
            type: 'string',
            description: '예: 최고의 기술력과 신뢰를 바탕으로 하는 수예산업'
        },
        {
            name: 'aboutImage',
            title: '회사 소개 대표 이미지',
            type: 'image',
            options: {
                hotspot: true 
            }
        }
    ]
}