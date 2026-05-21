// schemaTypes/product.js
export default {
    name: 'product',
    title: '제품 및 서비스',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: '제품명',
            type: 'string',
            validation: Rule => Rule.required() // 💡 제품명은 필수로 적게 강제하기
        },
        {
            name: 'description',
            title: '제품 설명',
            type: 'text',
            rows: 3,
            description: '제품에 대한 상세 스펙이나 설명을 적어주세요.'
        },
        {
            name: 'productImage',
            title: '제품 이미지',
            type: 'image',
            options: {
                hotspot: true
            },
            validation: Rule => Rule.required() // 💡 제품 사진도 필수로 등록하게 강제!
        }
    ]
}