import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/qnt_docs/',
  title: "QNT_Documentation",
  description: "Quảng Ninh Travel - Một sản phẩm hỗ trợ cải thiện hệ sinh thái du lịch, tỉnh Quảng Ninh",
  themeConfig: {
    nav: [
      { text: 'Trang chủ', link: '/' },
      { text: 'Tính năng', link: '/tinh-nang-1' }
    ],

    sidebar: [
      {
        text: 'Các tính năng chính',
        items: [
          { text: '1. Giới thiệu điểm đến', link: '/tinh-nang-1' },
          { text: '2. Lập lộ trình', link: '/tinh-nang-2' },
          { text: '3. Đặt dịch vụ', link: '/tinh-nang-3' },
          { text: '4. Dự báo thời tiết', link: '/tinh-nang-4' },
          { text: '5. Quản lý tài chính', link: '/tinh-nang-5' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/bnam8210/quang_ninh_travel' }
    ]
  }
})