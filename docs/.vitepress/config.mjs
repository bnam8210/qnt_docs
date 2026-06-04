export default {
  title: 'Quảng Ninh Travel',
  description: 'Hướng dẫn sử dụng Quảng Ninh Travel - Ứng dụng du lịch tích hợp',
  lang: 'vi-VN',
  base: '/qnt_docs/',
  
  head: [
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200' }],
    ['link', { rel: 'icon', href: '/logo.ico' }]
  ],
  
  themeConfig: {
    logo: {
      light: '/logo-light.svg',
      dark: '/logo-dark.svg'
    },
    
    nav: [
      { 
        text: '🏠 Trang chủ', 
        link: '/' 
      },
      { 
        text: '✨ Tính năng', 
        items: [
          { text: '📍 Giới thiệu điểm đến', link: '/tinh-nang-1' },
          { text: '🗺️ Lập lộ trình', link: '/tinh-nang-2' },
          { text: '🎫 Đặt dịch vụ', link: '/tinh-nang-3' },
          { text: '⛅ Dự báo thời tiết', link: '/tinh-nang-4' },
          { text: '💰 Quản lý tài chính', link: '/tinh-nang-5' }
        ]
      },
      { 
        text: '❓ Hỗ trợ', 
        link: '/thiet-lap-tai-khoan' 
      }
    ],
    
    sidebar: [
      {
        text: '🚀 Bắt đầu',
        items: [
          { text: '📝 Thiết lập tài khoản', link: '/thiet-lap-tai-khoan' }
        ]
      },
      {
        text: '⭐ Các tính năng chính',
        items: [
          { text: '📍 Giới thiệu điểm đến', link: '/tinh-nang-1' },
          { text: '🗺️ Lập lộ trình', link: '/tinh-nang-2' },
          { text: '🎫 Đặt dịch vụ', link: '/tinh-nang-3' },
          { text: '⛅ Dự báo thời tiết', link: '/tinh-nang-4' },
          { text: '💰 Quản lý tài chính', link: '/tinh-nang-5' }
        ]
      }
    ],
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/bnam8210/quang_ninh_travel' }
    ],
    
    footer: {
      message: 'Dự án được phát triển bởi học sinh trường THPT Cẩm Phả',
      copyright: 'Copyright © 2024 Quảng Ninh Travel'
    },
    
    search: {
      provider: 'local',
      options: {
        locales: {
          'vi': {
            translations: {
              button: {
                buttonText: '🔍 Tìm kiếm',
                buttonAriaLabel: 'Tìm kiếm tài liệu'
              },
              modal: {
                noResultsText: 'Không tìm thấy kết quả',
                footer: {
                  selectText: 'chọn',
                  navigateText: 'điều hướng',
                  closeText: 'đóng'
                }
              }
            }
          }
        }
      }
    }
  }
}
