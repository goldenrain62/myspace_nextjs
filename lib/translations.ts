export type Language = "VI" | "EN";

interface TranslationContent {
  mainTitle: string;
  subTitle: string;
  by: string;
  login: string;
  logout: string;
  welcomeUser: string;
  upload_title: string;
  upload_subtitle: string;
  btn_camera: string;
  btn_library: string;
  disclaimer_title: string;
  disclaimer_text: string;
  demo_title: string;
  tab_all: string;
  step2_title: string;
  promptMode: string;
  promptPlaceholder: string;
  compareMode: string;
  selectLeft: string;
  selectRight: string;
  generate: string;
  generating: string;
  generationsLeft: string;
  unlimited: string;
  back: string;
  error: string;
  noProductError: string;
  noProductsCompareError: string;
  noContextError: string;
  noCreditsError: string;
  noCreditsCompareError: string;
  safetyError: string;
  quotaError: string;
  genericError: string;
  invalidCredentials: string;
  viewProduct: string;
  download: string;
  mobile_compare_label: string;
  mobile_left: string;
  mobile_right: string;
  mobile_generating: string;
  mobile_generate: string;
}

export const translations: Record<Language, TranslationContent> = {
  VI: {
    mainTitle: "Công Cụ Phối Cảnh",
    subTitle: "Trình Tạo Ảnh Nội Thất",
    by: "Cung cấp bởi 3K Home",
    login: "Đăng Nhập",
    logout: "Đăng Xuất",
    welcomeUser: "Xin chào",
    upload_title: "Tải ảnh phòng của bạn",
    upload_subtitle: "Chọn ảnh từ thiết bị:",
    btn_camera: "Chụp ảnh",
    btn_library: "Thư viện",
    disclaimer_title: "Lưu ý",
    disclaimer_text:
      "Màu sắc sàn trên màn hình có thể khác biệt so với thực tế do ánh sáng. Vui lòng xem mẫu thực tế.",
    demo_title: "Hoặc chọn phòng mẫu có sẵn",
    tab_all: "Thư viện phòng mẫu",

    step2_title: "Chọn Sàn",
    promptMode: "Tạo với Prompt",
    promptPlaceholder: "VD: Phòng khách hiện đại, nhiều ánh sáng tự nhiên...",
    compareMode: "Chế độ so sánh",
    selectLeft: "Chọn Mẫu Trái",
    selectRight: "Chọn Mẫu Phải",
    generate: "Xem kết quả",
    generating: "Đang xử lý...",
    generationsLeft: "Lượt tạo còn lại",
    unlimited: "Không giới hạn",
    back: "Đổi phòng khác",
    error: "Lỗi",
    noProductError: "Vui lòng chọn một sản phẩm sàn.",
    noProductsCompareError: "Vui lòng chọn cả hai sản phẩm sàn để so sánh.",
    noContextError: "Vui lòng chọn một phòng mẫu hoặc tải ảnh lên.",
    noCreditsError: "Bạn đã hết lượt tạo ảnh.",
    noCreditsCompareError: "Bạn cần ít nhất 1 lượt tạo ảnh để so sánh.",
    safetyError: "Quá trình tạo ảnh thất bại do chính sách an toàn.",
    quotaError: "Hệ thống đang bận, vui lòng thử lại sau.",
    genericError: "Đã có lỗi xảy ra, vui lòng thử lại.",
    invalidCredentials: "Tên đăng nhập hoặc mật khẩu không đúng.",
    viewProduct: "Xem chi tiết",
    download: "Tải về",
    mobile_compare_label: "So sánh",
    mobile_left: "Trái",
    mobile_right: "Phải",
    mobile_generating: "Đang tạo...",
    mobile_generate: "Xem kết quả",
  },
  EN: {
    mainTitle: "Room Visualizer",
    subTitle: "Interior Visualizer",
    by: "by 3K Home Warehouse",
    login: "Login",
    logout: "Logout",
    welcomeUser: "Welcome",
    upload_title: "Upload your room",
    upload_subtitle: "Select photo from device:",
    btn_camera: "Camera",
    btn_library: "Library",
    disclaimer_title: "Note",
    disclaimer_text:
      "Colors on screen may differ from reality due to lighting. Please view actual samples.",
    demo_title: "Or choose a demo room",
    tab_all: "Demo Gallery",

    step2_title: "Select Floor",
    promptMode: "Use Prompt",
    promptPlaceholder: "E.g., A modern living room...",
    compareMode: "Compare Mode",
    selectLeft: "Select Left",
    selectRight: "Select Right",
    generate: "Visualize",
    generating: "Processing...",
    generationsLeft: "Generations Left",
    unlimited: "Unlimited",
    back: "Change Room",
    error: "Error",
    noProductError: "Please select a flooring product.",
    noProductsCompareError: "Select both products to compare.",
    noContextError: "Please select a room or upload a photo.",
    noCreditsError: "No generations left.",
    noCreditsCompareError: "No generations left for compare.",
    safetyError: "Generation blocked by safety policy.",
    quotaError: "System busy, please try again later.",
    genericError: "An error occurred.",
    invalidCredentials: "Invalid credentials.",
    viewProduct: "Details",
    download: "Download",
    mobile_compare_label: "Compare",
    mobile_left: "Left",
    mobile_right: "Right",
    mobile_generating: "Creating...",
    mobile_generate: "Visualize",
  },
};
