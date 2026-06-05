/**
 * DIGITAL OPERATING SYSTEM PORTFOLIO - CORE LOGIC ENGINE
 * Author: Nguyễn Trường An
 * Course: Nhập môn Công nghệ số và Ứng dụng Trí tuệ nhân tạo
 * Built with pure Vanilla JS ES6.
 */

// Fallback JSON data for local file:// protocol loading to bypass CORS restrictions
const FALLBACK_DATA = {
  "profile": {
    "name": "Nguyễn Trường An",
    "studentId": "25020440",
    "class": "Nhóm 23",
    "major": "Kỹ thuật Máy tính",
    "school": "Trường Đại học Công nghệ - VNU",
    "course": "Nhập môn Công nghệ số và Ứng dụng Trí tuệ nhân tạo",
    "avatar": "img/avt.jpg",
    "status": "Hoàn thành 100% chương trình học tập",
    "role": "Nhà phát triển tương lai",
    "email": "25020440@vnu.edu.vn",
    "github": "https://github.com/nguyen-truong-an",
    "linkedin": "https://linkedin.com/in/nguyen-truong-an"
  },
  "metrics": {
    "assignments": 6,
    "skillsCount": 7,
    "progress": 100
  },
  "overview": {
    "summary": "Tôi là một sinh viên đam mê công nghệ số và trí tuệ nhân tạo, luôn tìm cách ứng dụng các công nghệ mới nhất vào giải quyết các bài toán thực tiễn. Suốt quá trình tham gia học phần 'Nhập môn Công nghệ số và Ứng dụng Trí tuệ nhân tạo', tôi đã phát triển tư duy hệ thống từ nền tảng máy tính cơ bản, khai thác thông tin, ứng dụng AI, hợp tác số, sáng tạo nội dung cho đến đạo đức học thuật. Hệ điều hành học tập (Digital OS) này chính là minh chứng sinh động nhất cho hành trình chuyển đổi số của bản thân tôi.",
    "goals": [
      "Làm chủ các công cụ tìm kiếm và đánh giá dữ liệu số chính xác.",
      "Tối ưu hóa hiệu suất học tập bằng cách tích hợp mô hình AI và Prompt Engineering.",
      "Xây dựng tư duy đạo đức số và liêm chính học thuật trong thời đại Generative AI."
    ],
    "aiRole": "AI không thay thế tư duy sáng tạo của tôi, mà đóng vai trò như một cộng sự đắc lực (Co-pilot), giúp giải phóng sức lao động thủ công và kích thích các ý tưởng giải pháp đột phá trong suốt chặng đường học tập học phần này.",
    "journey": "Từ những buổi đầu bỡ ngỡ với các thiết bị ngoại vi và cấu trúc máy tính, tôi đã tiến bộ vượt bậc, biết cách ứng dụng các mô hình ngôn ngữ lớn (LLMs), thiết lập quy trình Kanban để làm việc nhóm, thiết kế các ấn phẩm số có tính thẩm mỹ và hoàn thành khóa học với cam kết tuân thủ đạo đức công nghệ tuyệt đối."
  },
  "knowledgeGraph": [
    { "id": "mod-1", "label": "Hệ thống Máy tính", "subtitle": "Nền tảng phần cứng & ngoại vi", "x": 10, "y": 50, "moduleIndex": 0 },
    { "id": "mod-2", "label": "Khai thác Dữ liệu", "subtitle": "Tìm kiếm & đánh giá thông tin", "x": 28, "y": 30, "moduleIndex": 1 },
    { "id": "mod-3", "label": "Trí tuệ Nhân tạo", "subtitle": "Tổng quan & Ứng dụng AI", "x": 46, "y": 60, "moduleIndex": 2 },
    { "id": "mod-4", "label": "Hợp tác Môi trường Số", "subtitle": "Giao tiếp số & Kanban", "x": 64, "y": 30, "moduleIndex": 3 },
    { "id": "mod-5", "label": "Sáng tạo Nội dung", "subtitle": "Thiết kế & ấn phẩm số", "x": 82, "y": 60, "moduleIndex": 4 },
    { "id": "mod-6", "label": "Đạo đức Kỹ thuật số", "subtitle": "An toàn & liêm chính học thuật", "x": 95, "y": 50, "moduleIndex": 5 }
  ],
  "modules": [
    {
      "id": "module-1",
      "title": "Bài 1 - Bài tập 1: Máy tính và các thiết bị ngoại vi",
      "role": "Nền tảng công nghệ số",
      "overview": "Tìm hiểu cấu trúc tệp tin, phân chia quản lý dữ liệu lưu trữ và thực hành các thao tác cơ bản trên Hệ điều hành Windows nhằm quản trị dữ liệu học tập cá nhân một cách khoa học.",
      "insights": "Việc tổ chức thư mục học tập khoa học giúp tối ưu hóa thời gian tra cứu và bảo vệ an toàn dữ liệu số khỏi thất lạc. Biết cách sử dụng phím tắt giúp gia tăng 40% hiệu suất quản lý tệp tin hàng ngày.",
      "objectives": [
        "Làm quen với giao diện File Explorer và thao tác quản lý tệp trên hệ điều hành Windows.",
        "Thành thạo việc tạo, đổi tên, sao chép (Copy), di chuyển (Cut), xóa (Delete) tệp tin và thư mục.",
        "Hiểu cơ chế hoạt động của Thùng rác (Recycle Bin) và cách khôi phục hoặc xóa vĩnh viễn tệp tin bằng phím tắt."
      ],
      "mainContent": "Nội dung bài tập hướng dẫn quy trình tạo thư mục học tập chuẩn hóa theo cú pháp ThucHanh_hotensinhvien. Thực hiện đổi tên tệp từ GhiChu.txt sang GhiChuQuanTrong.txt, thiết lập thư mục con TaiLieu, thực hành sao chép và di chuyển tệp tin qua phím tắt, tìm hiểu cách hoạt động của thùng rác và lệnh xóa vĩnh viễn Shift+Delete.",
      "process": [
        "Khởi chạy File Explorer bằng tổ hợp phím Windows + E và truy cập ổ đĩa lưu trữ (ổ D: hoặc Documents).",
        "Tạo thư mục thực hành cá nhân theo cấu trúc quy chuẩn ThucHanh_NguyenTruongAn.",
        "Tạo tệp văn bản GhiChu.txt, đổi tên tệp và tạo thư mục con TaiLieu.",
        "Thực hiện các lệnh sao chép (Ctrl+C), di chuyển (Ctrl+X, Ctrl+V), xóa tệp và thực nghiệm khôi phục từ Recycle Bin hoặc xóa vĩnh viễn (Shift+Delete)."
      ],
      "evidence": [
        { "title": "Sơ đồ Kiến trúc Von Neumann", "type": "diagram", "dataId": "von-neumann" },
        { "title": "Bảng So sánh Linh kiện Phần cứng", "type": "table", "dataId": "components-table" },
        { "title": "Mô phỏng Luồng Dữ liệu I/O", "type": "chart", "dataId": "io-flow" }
      ],
      "documents": [
        { "name": "Báo cáo Bài tập 1.pdf", "path": "Baitap/Bai1/bai1.pdf", "size": "483 KB" }
      ],
      "reflection": "Thông qua bài học đầu tiên, tôi đã củng cố được nền móng vững chắc về công nghệ phần cứng và thao tác hệ thống. Việc thiết lập cấu trúc thư mục khoa học giúp tôi quản lý hàng tá tài liệu các môn học một cách gọn gàng, tránh thất lạc dữ liệu."
    },
    {
      "id": "module-2",
      "title": "Bài 2 - Bài tập 2: Khai thác dữ liệu và thông tin",
      "role": "Kỹ năng tìm kiếm và đánh giá thông tin",
      "overview": "Thực hành tra cứu, đánh giá chất lượng học thuật và độ tin cậy của 10 nguồn tài liệu nghiên cứu phục vụ đề tài nghiên cứu 'Tối ưu hóa kiến trúc SoC cho AI trên thiết bị Edge' bằng thang đánh giá tiêu chuẩn.",
      "insights": "Trong thời đại quá tải thông tin hiện nay, bộ lọc tư duy phê phán chính là chìa khóa. Việc áp dụng tiêu chí chuẩn hóa giúp phân biệt rõ giữa tri thức khoa học đáng tin cậy và tin giả hay thông tin rác.",
      "objectives": [
        "Thành thạo kỹ thuật tìm kiếm nâng cao (Boolean Search, Google Operators) trên cơ sở dữ liệu IEEE, ACM, Google Scholar.",
        "Áp dụng tiêu chí đánh giá nguồn tin khoa học CRAAP (Currency, Relevance, Authority, Accuracy, Purpose).",
        "Lập bảng tổng hợp, đánh giá độ tin cậy của tài liệu nghiên cứu và trích dẫn chuẩn Harvard Style."
      ],
      "mainContent": "Nội dung bài tập tập trung phân tích 10 tài liệu khoa học hàng đầu liên quan đến bán dẫn và kiến trúc SoC cho AI. Thực hiện tra cứu và đánh giá kỹ lưỡng các tài liệu uy tín từ IEEE (Shao et al. 2023), ACM (Chen et al. 2024), tài liệu ngành của ARM và NVIDIA, sách chuyên khảo của Hennessy & Patterson. Đúc rút các xu hướng thiết kế chip AI chuyên dụng (DSA) và tối ưu hóa hiệu suất trên mỗi Watt.",
      "process": [
        "Xác định từ khóa cốt lõi (SoC architecture optimization, Edge AI hardware, FPGA accelerator) và xây dựng chuỗi truy vấn Boolean nâng cao.",
        "Tra cứu tài liệu trên các nền tảng IEEE Xplore, Google Scholar và thư viện số VNU-LIC trong giai đoạn 2021-2026.",
        "Đánh giá độ tin cậy của 10 nguồn thu thập theo 5 tiêu chí của ma trận CRAAP.",
        "Tóm tắt nội dung chính của các bài báo, sách chuyên khảo tiêu biểu và xuất danh mục tài liệu tham khảo theo Harvard Style."
      ],
      "evidence": [
        { "title": "Ma trận CRAAP Đánh giá Nguồn tin", "type": "matrix", "dataId": "craap-matrix" },
        { "title": "Cú pháp Tìm kiếm Nâng cao", "type": "code", "dataId": "boolean-query" },
        { "title": "Bản đồ Nguồn tin Khoa học", "type": "graph", "dataId": "citation-map" }
      ],
      "documents": [
        { "name": "Báo cáo Bài tập 2.pdf", "path": "Baitap/Bai2/bai2.pdf", "size": "341 KB" }
      ],
      "reflection": "Kỹ năng tìm kiếm và đánh giá thông tin giúp tôi xây dựng tư duy nghiên cứu nghiêm túc. Tôi nhận ra các tài liệu từ tạp chí bình duyệt như IEEE, ACM luôn là nguồn tham khảo vững chắc nhất cho sinh viên công nghệ so với các nguồn tự do chưa qua kiểm duyệt."
    },
    {
      "id": "module-3",
      "title": "Bài 3 - Bài tập 2: Tổng quan về trí tuệ nhân tạo",
      "role": "Hiểu và ứng dụng AI",
      "overview": "Khám phá nguyên lý hoạt động của trí tuệ nhân tạo, thiết lập kỹ năng Prompt Engineering chuyên nghiệp phục vụ học tập (tóm tắt văn bản, giải thích khái niệm toán Giải tích 2, tạo câu hỏi ôn tập).",
      "insights": "AI không phải là chiếc đũa thần tự động hóa tất cả, mà là một công cụ khuếch đại tư duy. Kết quả đầu ra của AI phụ thuộc trực tiếp vào chất lượng câu lệnh (prompt) và ngữ cảnh mà chúng ta cung cấp.",
      "objectives": [
        "Nắm vững nguyên tắc cấu trúc câu lệnh hiệu quả (Nguyên tắc 4C: Context, Clear, Concise, Constraint).",
        "Làm chủ các kỹ thuật viết prompt nâng cao: Role Prompting, Chain-of-Thought (suy luận từng bước), và Few-shot Prompting.",
        "Đánh giá và so sánh mức độ chính xác của phản hồi do AI tạo ra trên các dạng prompt khác nhau."
      ],
      "mainContent": "Thực hành thiết kế các bộ prompt cơ bản và prompt nâng cao để tương tác với mô hình ngôn ngữ lớn (LLM). Phân tích các trường hợp tóm tắt bài đọc chuyên ngành, giải thích các khái niệm toán học phức tạp trong tài liệu Giải tích 2 (ví dụ: Miền dạng 1 và Miền dạng 2 của tích phân kép) và thiết lập prompt tạo bộ đề ôn tập trắc nghiệm kèm đáp án chi tiết.",
      "process": [
        "Nghiên cứu nguyên lý hoạt động của LLM và các lỗi ảo giác (hallucination) thường gặp.",
        "Thiết lập prompt cơ bản và tiến hành nâng cấp thành prompt cấu trúc chi tiết cho 3 nhiệm vụ học tập.",
        "Ứng dụng kỹ thuật Chain-of-Thought để yêu cầu AI giải thích từng bước giải bài toán toán học cụ thể.",
        "Đúc rút các mẹo thực chiến viết prompt như quy chuẩn định dạng Markdown, LaTeX cho công thức toán học và thiết lập phản hồi tương tác."
      ],
      "evidence": [
        { "title": "Sơ đồ Phân nhánh Trí tuệ Nhân tạo", "type": "diagram", "dataId": "ai-branches" },
        { "title": "Ma trận Thử nghiệm Prompt", "type": "table", "dataId": "prompt-testing" },
        { "title": "Hệ thống Mẫu Prompt Học tập", "type": "code", "dataId": "prompt-templates" }
      ],
      "documents": [
        { "name": "Báo cáo Bài tập 3.pdf", "path": "Baitap/Bai3/bai3.pdf", "size": "858 KB" }
      ],
      "reflection": "Làm chủ Prompt Engineering giúp tôi khai thác AI một cách thông minh và chủ động. AI đã trở thành một 'Gia sư ảo' đồng hành cùng tôi trong việc giải nghĩa các tài liệu kỹ thuật phức tạp, giúp việc tự học đạt hiệu quả cao hơn."
    },
    {
      "id": "module-4",
      "title": "Bài 4 - Bài tập 3: Giao tiếp và hợp tác trong môi trường số",
      "role": "Hợp tác hiệu quả trong môi trường số",
      "overview": "Ứng dụng các công cụ cộng tác trực tuyến hiện đại (ClickUp, Google Docs, Google Drive, Discord) nhằm xây dựng quy trình làm việc nhóm trực quan, khoa học trong học tập.",
      "insights": "Hợp tác số không đơn thuần là nhắn tin qua Zalo hay Zoom, mà là xây dựng một hệ điều hành công việc minh bạch nơi mọi thành viên đều hiểu rõ tiến độ, vai trò và trách nhiệm của mình.",
      "objectives": [
        "Ứng dụng nền tảng ClickUp để quản trị dự án, lập danh mục tác vụ cá nhân và theo dõi trạng thái công việc.",
        "Thành thạo công cụ Google Docs để đồng soạn thảo báo cáo, góp ý trực tuyến bằng tính năng bình luận.",
        "Kết hợp Discord để họp nhóm đồng bộ và Google Drive để lưu trữ, chia sẻ cơ sở dữ liệu an toàn."
      ],
      "mainContent": "Hướng dẫn chi tiết quá trình thiết lập bảng Kanban cá nhân trên ClickUp với 4 cột trạng thái (To Do, In Progress, Review, Done). Lập danh sách phân chia công việc trong nhóm (viết nội dung mở đầu, tổng hợp tài liệu tham khảo, hoàn thiện báo cáo cuối). Đánh giá hiệu suất và rủi ro trễ deadline bằng cách kiểm soát thời hạn của từng nhiệm vụ cá nhân trong chu kỳ dự án 1 tuần.",
      "process": [
        "Khảo sát nhu cầu quản lý dự án học tập nhóm và lựa chọn bộ công cụ cộng tác phù hợp.",
        "Thiết lập bảng tác vụ cá nhân trên ClickUp, định cấu hình thời hạn và thứ tự ưu tiên.",
        "Thực hành soạn thảo báo cáo nhóm trực tiếp trên Google Docs, sử dụng các chế độ đề xuất sửa đổi và bình luận trao đổi.",
        "Tổ chức kênh giao tiếp bất đồng bộ qua Discord và đánh giá hiệu quả phối hợp công cụ cuối chu kỳ dự án."
      ],
      "evidence": [
        { "title": "Bảng Kanban Quản lý Học tập Nhóm", "type": "kanban", "dataId": "interactive-kanban-board" },
        { "title": "Biểu đồ Phân bổ Vai trò RACI", "type": "table", "dataId": "raci-table" },
        { "title": "Sơ đồ Luồng Giao tiếp Số", "type": "chart", "dataId": "collaboration-flow" }
      ],
      "documents": [
        { "name": "Báo cáo Bài tập 4.pdf", "path": "Baitap/Bai4/bai4.pdf", "size": "4.73 MB" }
      ],
      "reflection": "Quá trình hợp tác số giúp tôi rèn luyện kỹ năng làm việc nhóm từ xa một cách bài bản. Việc trực quan hóa tiến trình công việc giúp loại bỏ hoàn toàn sự chồng chéo nhiệm vụ và thúc đẩy tinh thần chủ động hoàn thành đúng hạn."
    },
    {
      "id": "module-5",
      "title": "Bài 5 - Bài tập 2: Sáng tạo nội dung số",
      "role": "Biến ý tưởng thành sản phẩm số",
      "overview": "Ứng dụng các công nghệ AI tạo sinh (ChatGPT, DALL-E, Canva AI) vào quy trình thiết kế và trực quan hóa thông tin thành ấn phẩm Infographic học thuật chuyên nghiệp.",
      "insights": "Nội dung số xuất sắc cần có sự cân bằng hoàn hảo giữa tính thẩm mỹ nghệ thuật và khả năng truyền đạt thông điệp rõ ràng. Thiết kế tốt là thiết kế giúp người xem tiếp nhận thông tin dễ dàng nhất.",
      "objectives": [
        "Kết hợp ChatGPT để xây dựng dàn ý, chắt lọc nội dung cốt lõi của đề tài nghiên cứu.",
        "Ứng dụng mô hình DALL-E tạo hình ảnh minh họa độc bản mô tả sinh viên Việt Nam học tập cùng AI.",
        "Sử dụng Canva AI để bố cục trang thiết kế Infographic, đồng bộ màu sắc và xuất bản định dạng tối ưu."
      ],
      "mainContent": "Dự án tập trung thiết kế sản phẩm Infographic truyền thông về chủ đề: 'Tác động của AI đến việc học của sinh viên'. ChatGPT hỗ trợ tinh gọn nội dung thành 5 luận điểm chính: cá nhân hóa việc học, tăng hiệu suất, phụ thuộc công nghệ, vấn đề đạo đức, kỹ năng mới. DALL-E tạo lập hình ảnh chất lượng cao theo prompt cấu trúc. Canva AI thực hiện phân bổ lưới thiết kế Gestalt và xuất bản báo cáo phân tích quy trình sáng tạo.",
      "process": [
        "Nghiên cứu đối tượng người xem và chắt lọc nội dung cốt lõi thông qua ChatGPT.",
        "Tạo hình minh họa độc bản bằng AI DALL-E với mô tả bối cảnh sinh viên Việt Nam và bàn học tối giản.",
        "Nhập tài nguyên ảnh vào Canva, căn chỉnh bố cục lưới và thiết kế bảng màu thương hiệu.",
        "Xuất bản ấn phẩm truyền thông số và viết báo cáo đánh giá trải nghiệm kết hợp các công cụ AI."
      ],
      "evidence": [
        { "title": "Bộ sưu tập Ấn phẩm Thiết kế Số", "type": "gallery", "dataId": "design-gallery-view" },
        { "title": "Sơ đồ Tư duy Thiết kế (Design Thinking)", "type": "diagram", "dataId": "design-thinking-process" },
        { "title": "Phân tích Bố cục Lưới & Màu sắc", "type": "chart", "dataId": "grid-color-analysis" }
      ],
      "documents": [
        { "name": "Báo cáo Bài tập 5.pdf", "path": "Baitap/Bai5/bai5.pdf", "size": "676 KB" }
      ],
      "reflection": "Sáng tạo nội dung số với sự trợ lực của AI giúp tôi nâng tầm tư duy trực quan hóa. Việc học cách kết nối ChatGPT để xây dựng nội dung, DALL-E để sản xuất tài nguyên và Canva để dàn trang là quy trình thiết kế hiệu năng cao."
    },
    {
      "id": "module-6",
      "title": "Bài 6 - Bài tập 4: An toàn và liêm chính học thuật trong môi trường số",
      "role": "Sử dụng AI và công nghệ có trách nhiệm",
      "overview": "Nghiên cứu chính sách đạo đức công nghệ của trường đại học (ĐHQGHN) và thiết lập bộ nguyên tắc cá nhân về sử dụng AI có trách nhiệm nhằm đảm bảo liêm chính học thuật.",
      "insights": "Sự tiện lợi của AI mang lại rủi ro rất lớn về liêm chính học thuật nếu lạm dụng sao chép không trích dẫn. Sử dụng AI có trách nhiệm là việc bảo vệ quyền sở hữu trí tuệ và khẳng định giá trị đóng góp độc lập của người học.",
      "objectives": [
        "Hiểu rõ chính sách khuyến khích ứng dụng AI và ranh giới ngăn ngừa gian lận học thuật tại Đại học Quốc Gia Hà Nội.",
        "Thực hành xây dựng bài thuyết trình 'Tác động của AI đối với sinh viên' kết hợp trích dẫn nguồn AI chuẩn mực.",
        "Thiết lập bộ 7 nguyên tắc đạo đức cá nhân khi sử dụng trí tuệ nhân tạo trong môi trường học tập trực tuyến."
      ],
      "mainContent": "Báo cáo chi tiết về chính sách AI của ĐHQGHN, tập trung vào tính minh bạch, đạo đức học thuật và trách nhiệm người học. Thực hành thiết kế slide thuyết trình với sự hỗ trợ của ChatGPT từ việc lên dàn ý, viết nội dung từng slide đến định hình hình ảnh. Phân tích ranh giới giữa hỗ trợ hợp lý (gợi ý ý tưởng, tóm tắt tài liệu) và gian lận (sao chép nguyên văn), ảnh hưởng của AI tới kỹ năng viết độc lập và đề xuất bộ quy tắc ứng xử AI có trách nhiệm.",
      "process": [
        "Khảo sát các định hướng và tài liệu chính sách của ĐHQGHN liên quan đến đạo đức học thuật và ứng dụng công nghệ số.",
        "Thiết lập bài thuyết trình mẫu, ghi nhận đầy đủ lịch sử prompt sử dụng và cách biên tập đầu ra của AI.",
        "Soạn thảo phần trích dẫn minh bạch về việc sử dụng AI (APA Style) trong báo cáo.",
        "Lập bộ 7 nguyên tắc cá nhân và thiết kế Infographic tổng kết chính sách sử dụng AI có trách nhiệm."
      ],
      "evidence": [
        { "title": "7 Nguyên tắc Đạo đức AI", "type": "list", "dataId": "ethics-principles" },
        { "title": "Mẫu Hướng dẫn Trích dẫn Nguồn AI", "type": "table", "dataId": "ai-citation-guide" },
        { "title": "Sơ đồ Quy trình Kiểm tra Liêm chính", "type": "chart", "dataId": "integrity-check" }
      ],
      "documents": [
        { "name": "Báo cáo Bài tập 6.pdf", "path": "Baitap/Bai6/bai6.pdf", "size": "1.25 MB" }
      ],
      "reflection": "Đạo đức số chính là kim chỉ nam giúp tôi học tập bền vững trong kỷ nguyên AI. Việc tự đặt ra giới hạn và trích dẫn minh bạch nguồn AI không làm giảm giá trị bài báo cáo, ngược lại khẳng định năng lực nghiên cứu độc lập và sự chuyên nghiệp của bản thân."
    }
  ],
  "skills": {
    "labels": [
      "Digital Literacy",
      "AI Literacy",
      "Prompt Engineering",
      "Research Skills",
      "Collaboration",
      "Content Creation",
      "Critical Thinking"
    ],
    "scores": [90, 85, 95, 88, 92, 85, 90],
    "matrix": [
      { "name": "Digital Literacy", "level": "Advanced", "description": "Làm chủ kiến trúc máy tính cá nhân, hệ thống lưu trữ đám mây và cấu hình thiết bị ngoại vi tối ưu." },
      { "name": "AI Literacy", "level": "Advanced", "description": "Hiểu rõ các thuật toán học máy cơ bản, mô hình ngôn ngữ lớn và giới hạn của Generative AI." },
      { "name": "Prompt Engineering", "level": "Expert", "description": "Thành thạo cấu trúc câu lệnh chuyên nghiệp, tạo lập chatbot cá nhân hóa và tinh chỉnh ngữ cảnh thông minh." },
      { "name": "Research Skills", "level": "Advanced", "description": "Sử dụng thành thạo toán tử Boolean nâng cao và quy trình đánh giá nguồn tin tin cậy CRAAP." },
      { "name": "Collaboration", "level": "Expert", "description": "Điều phối công việc nhóm mượt mà thông qua bảng ClickUp/Kanban trực quan và quy trình Agile tinh gọn." },
      { "name": "Content Creation", "level": "Advanced", "description": "Tự thiết kế infographics, slide báo cáo học thuật chuyên nghiệp với bố cục lưới Canva chặt chẽ." },
      { "name": "Critical Thinking", "level": "Advanced", "description": "Biết hoài nghi khoa học trước dữ liệu số, phân tích lỗi ảo giác của AI và thẩm định nguồn gốc thông tin." }
    ]
  },
  "achievements": [],
  "reflectionCenter": {
    "title": "Báo Cáo Tổng Kết Hành Trình Chuyển Đổi Số Học Thuật",
    "intro": "Nhìn lại toàn bộ hành trình đi qua 6 bài học lớn, tôi nhận thấy bản thân đã thực hiện được một cuộc chuyển đổi số tư duy toàn diện. Từ một người sử dụng công nghệ thụ động, tôi đã biến đổi thành một công dân số chủ động kiến tạo giá trị với sự trợ lực đắc lực từ AI.",
    "flow": [
      { "step": "Hiểu công nghệ", "desc": "Nắm vững bản chất phần cứng máy tính và cách quản lý tệp tin trên Windows." },
      { "step": "Khai thác thông tin", "desc": "Tự thiết lập màng lọc tư duy phản biện, thẩm định 10 nguồn tài liệu về chip Edge AI theo ma trận CRAAP." },
      { "step": "Tiếp cận AI", "desc": "Làm chủ câu lệnh (Prompt) và kỹ thuật Chain-of-Thought Giải tích 2 để biến AI thành cộng sự đắc lực." },
      { "step": "Hợp tác số", "desc": "Chuyển giao việc quản trị cá nhân lẫn nhóm lên hệ điều hành Kanban ClickUp và Discord." },
      { "step": "Sáng tạo nội dung", "desc": "Trực quan hóa tác động của AI bằng infographic tự thiết kế kết hợp ChatGPT, DALL-E và Canva AI." },
      { "step": "Đạo đức số", "desc": "Cam kết sử dụng AI có trách nhiệm dựa trên chính sách của ĐHQGHN và 7 nguyên tắc đạo đức cá nhân." }
    ],
    "conclusion": "Học phần này không chỉ cung cấp kiến thức, mà trang bị cho tôi một 'Hệ Điều Hành Học Tập Mới' - nơi tôi làm chủ các công cụ, dữ liệu và AI để sẵn sàng bước vào cuộc cách mạng công nghệ tương lai với vị thế vững vàng nhất."
  }
};;

// Global App State
let AppData = FALLBACK_DATA;
let activeDocumentPath = "";
let pdfZoomLevel = 1.0;

// Initialize app when DOM ready
document.addEventListener("DOMContentLoaded", async () => {
  // Try loading dynamic JSON data. Fallback to hardcoded object if offline/file:// CORS block
  try {
    const response = await fetch(`data/data.json?_t=${Date.now()}`);
    if (response.ok) {
      AppData = await response.json();
      console.log("Loaded AppData from data/data.json");
    } else {
      console.warn("Failed to fetch data/data.json, using fallback data.");
    }
  } catch (error) {
    console.warn("CORS/Fetch error, running under fallback data mode.", error);
  }

  initLoadingScreen();
  initTheme();
  renderProfileData();
  renderOverview();
  renderKnowledgeGraph();
  renderModules();
  renderDocumentHub();
  renderRadarChart();
  renderSkillMatrix();
  renderReflectionCenter();
  initTypingEffect();
  initCounters();
  initCommandPalette();
  initFloatingDock();
  initScrollEffects();
});

/* ==========================================================================
   1. LOADING SCREEN
   ========================================================================== */
function initLoadingScreen() {
  const bar = document.getElementById("loading-bar");
  const screen = document.getElementById("loading-screen");
  
  // Set loadbar progress
  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.floor(Math.random() * 15) + 5;
    if (progress >= 100) {
      progress = 100;
      clearInterval(interval);
      setTimeout(() => {
        screen.classList.add("hidden");
      }, 300);
    }
    bar.style.width = progress + "%";
  }, 100);
}

/* ==========================================================================
   2. THEME MANAGER (DARK/LIGHT)
   ========================================================================== */
function initTheme() {
  const currentTheme = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", currentTheme);

  // Bind to theme buttons
  const themeToggle = document.getElementById("dock-theme-toggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", toggleTheme);
  }
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  
  // Re-draw radar chart to adapt grid colors for dark/light contrast
  renderRadarChart();
}

/* ==========================================================================
   3. CUSTOM CURSOR (DEPRECATED)
   ========================================================================== */

/* ==========================================================================
   4. DATA RENDERING (PROFILE & OVERVIEW)
   ========================================================================== */
function renderProfileData() {
  const p = AppData.profile;
  
  // Set texts
  const sidebarName = document.getElementById("sidebar-name");
  const sidebarRole = document.getElementById("sidebar-role");
  if (sidebarName) sidebarName.textContent = p.name;
  if (sidebarRole) sidebarRole.textContent = p.role;
  document.getElementById("welcome-name").textContent = `Chào mừng, tôi là ${p.name}`;
  document.getElementById("welcome-course-title").textContent = p.course;
  
  // Student Profile Card bindings
  const cardName = document.getElementById("card-name");
  const cardMsv = document.getElementById("card-msv");
  const cardMajor = document.getElementById("card-major");
  const cardSchool = document.getElementById("card-school");
  const cardEmail = document.getElementById("card-email");

  if (cardName) cardName.textContent = p.name;
  if (cardMsv) cardMsv.textContent = p.studentId;
  if (cardMajor) cardMajor.textContent = p.major;
  if (cardSchool) cardSchool.textContent = p.school;
  if (cardEmail) cardEmail.textContent = p.email;
}

function renderOverview() {
  const ov = AppData.overview;
  
  document.getElementById("overview-summary-text").textContent = ov.summary;
  document.getElementById("overview-ai-role-text").textContent = ov.aiRole;
  
  const goalsList = document.getElementById("overview-goals-list");
  goalsList.innerHTML = "";
  ov.goals.forEach(goal => {
    const li = document.createElement("li");
    li.textContent = goal;
    goalsList.appendChild(li);
  });
}

/* ==========================================================================
   5. INTERACTIVE KNOWLEDGE GRAPH
   ========================================================================== */
function renderKnowledgeGraph() {
  const svg = document.getElementById("graph-svg");
  const path = document.getElementById("graph-path");
  const activePath = document.getElementById("graph-path-active");
  const nodesContainer = document.getElementById("graph-nodes-container");
  
  const nodes = AppData.knowledgeGraph;
  nodesContainer.innerHTML = "";
  
  // Calculate relative coords to SVG viewBox. ViewBox width is computed as 100% of wrapper
  const w = svg.clientWidth || 800;
  const h = 180;
  svg.setAttribute("viewBox", `0 0 ${w} ${h}`);

  // Build the nodes & the line path coordinates
  let pathD = "";
  nodes.forEach((node, i) => {
    // Map absolute percentages to SVG dimensions
    const px = (node.x / 100) * w;
    const py = (node.y / 100) * h;
    
    if (i === 0) {
      pathD += `M ${px} ${py}`;
    } else {
      // Create a smooth cubic curve layout between nodes
      const prevNode = nodes[i - 1];
      const ppx = (prevNode.x / 100) * w;
      const ppy = (prevNode.y / 100) * h;
      const cp1x = ppx + (px - ppx) / 2;
      const cp1y = ppy;
      const cp2x = ppx + (px - ppx) / 2;
      const cp2y = py;
      pathD += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${px} ${py}`;
    }

    // Spawn interactive HTML nodes floating over the SVG
    const nodeDiv = document.createElement("div");
    nodeDiv.className = "graph-node";
    nodeDiv.style.left = `${node.x}%`;
    nodeDiv.style.top = `${node.y}%`;
    nodeDiv.setAttribute("role", "link");
    nodeDiv.setAttribute("aria-label", `Xem ${node.label}`);
    
    nodeDiv.innerHTML = `
      <div class="node-circle"></div>
      <div class="node-tooltip">
        <div class="node-label">${node.label}</div>
        <div class="node-sub">${node.subtitle}</div>
      </div>
    `;
    
    // Click events to scroll directly to the correct module
    nodeDiv.addEventListener("click", () => {
      const targetId = `module-${i + 1}`;
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        
        // Highlight clicked node
        document.querySelectorAll(".graph-node").forEach(n => n.classList.remove("active"));
        nodeDiv.classList.add("active");
      }
    });

    nodesContainer.appendChild(nodeDiv);
  });

  path.setAttribute("d", pathD);
  activePath.setAttribute("d", pathD);
  
  // Set initial active state on first node
  setTimeout(() => {
    const firstNode = nodesContainer.querySelector(".graph-node");
    if (firstNode) firstNode.classList.add("active");
  }, 500);

  // Re-adjust coords on window resize
  window.addEventListener("resize", () => {
    const newW = svg.clientWidth || 800;
    svg.setAttribute("viewBox", `0 0 ${newW} ${h}`);
    let newPathD = "";
    nodes.forEach((node, i) => {
      const px = (node.x / 100) * newW;
      const py = (node.y / 100) * h;
      if (i === 0) {
        newPathD += `M ${px} ${py}`;
      } else {
        const prevNode = nodes[i - 1];
        const ppx = (prevNode.x / 100) * newW;
        const ppy = (prevNode.y / 100) * h;
        const cp1x = ppx + (px - ppx) / 2;
        const cp1y = ppy;
        const cp2x = ppx + (px - ppx) / 2;
        const cp2y = py;
        newPathD += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${px} ${py}`;
      }
    });
    path.setAttribute("d", newPathD);
    activePath.setAttribute("d", newPathD);
  });
}

/* ==========================================================================
   6. MODULES GENERATOR & SUB-FEATURES (KANBAN, DYNAMIC GALLERY)
   ========================================================================== */
function renderModules() {
  const container = document.getElementById("dynamic-modules");
  container.innerHTML = "";

  AppData.modules.forEach((mod, idx) => {
    const modDiv = document.createElement("article");
    modDiv.className = "module-block reveal";
    modDiv.id = `module-${idx + 1}`;
    
    // Determine the special components inside Modules
    let specialSectionHTML = "";
    if (idx === 3) {
      // Module 4 gets the Kanban board
      specialSectionHTML = `
        <div class="module-section-title">👥 Kanban Board Dự Án</div>
        <div class="kanban-board-container">
          <div class="kanban-board" id="kanban-board-mod4">
            <!-- Kanban columns rendered by JS -->
          </div>
        </div>
      `;
    } else if (idx === 4) {
      // Module 5 gets the filterable media gallery
      specialSectionHTML = `
        <div class="module-section-title">🎨 Bộ Sưu Tập Thiết Kế</div>
        <div class="gallery-controls">
          <div class="gallery-search-container">
            <span class="gallery-search-icon">🔍</span>
            <input type="text" class="gallery-search-input" id="gallery-search" placeholder="Tìm kiếm ấn phẩm...">
          </div>
          <div class="gallery-filter-buttons" id="gallery-filters">
            <button class="filter-btn active" data-filter="all">Tất cả</button>
            <button class="filter-btn" data-filter="ui-ux">UI/UX Mockup</button>
            <button class="filter-btn" data-filter="infographic">Infographics</button>
            <button class="filter-btn" data-filter="diagram">Diagrams</button>
          </div>
        </div>
        <div class="gallery-grid" id="gallery-grid-mod5">
          <!-- Gallery items rendered by JS -->
        </div>
      `;
    } else if (idx === 5) {
      // Module 6 gets the 7 Ethics Principles Cards
      specialSectionHTML = `
        <div class="module-section-title">🛡️ 7 Nguyên Tắc Đạo Đức AI</div>
        <div class="ethics-grid">
          <div class="ethics-card">
            <div class="ethics-num">01</div>
            <h4 class="ethics-title">Tính minh bạch (Transparency)</h4>
            <p class="ethics-desc">Mọi quyết định và nội dung do AI tạo ra đều phải được công khai, dán nhãn rõ ràng để tránh gây hiểu lầm cho người dùng.</p>
          </div>
          <div class="ethics-card">
            <div class="ethics-num">02</div>
            <h4 class="ethics-title">Trách nhiệm giải trình (Accountability)</h4>
            <p class="ethics-desc">Con người là chủ thể chịu trách nhiệm cuối cùng đối với mọi đầu ra hoặc sai sót kỹ thuật do mô hình AI tạo ra.</p>
          </div>
          <div class="ethics-card">
            <div class="ethics-num">03</div>
            <h4 class="ethics-title">Công bằng & Không phân biệt đối xử</h4>
            <p class="ethics-desc">Mô hình AI cần được huấn luyện trên nguồn dữ liệu khách quan, đa dạng, giảm thiểu tối đa thiên vị định kiến.</p>
          </div>
          <div class="ethics-card">
            <div class="ethics-num">04</div>
            <h4 class="ethics-title">Bảo mật quyền riêng tư</h4>
            <p class="ethics-desc">Tôn trọng quyền riêng tư dữ liệu cá nhân của người học, không thu thập dữ liệu trái phép phục vụ huấn luyện mô hình.</p>
          </div>
          <div class="ethics-card">
            <div class="ethics-num">05</div>
            <h4 class="ethics-title">An toàn và bảo mật hệ thống</h4>
            <p class="ethics-desc">Đảm bảo hệ thống AI hoạt động ổn định, có chốt chặn an toàn ngăn ngừa tin tặc phá hoại hoặc giả mạo thông tin.</p>
          </div>
          <div class="ethics-card">
            <div class="ethics-num">06</div>
            <h4 class="ethics-title">Tôn trọng quyền sở hữu trí tuệ</h4>
            <p class="ethics-desc">Trích dẫn nguồn học liệu rõ ràng theo các quy chuẩn APA/IEEE đối với mọi đoạn văn bản hay ý tưởng do AI gợi ý.</p>
          </div>
          <div class="ethics-card">
            <div class="ethics-num">07</div>
            <h4 class="ethics-title">Lợi ích cho cộng đồng và xã hội</h4>
            <p class="ethics-desc">Ứng dụng AI luôn hướng tới các mục tiêu nhân văn, hỗ trợ cải tiến năng suất học tập và phục vụ các giá trị chung.</p>
          </div>
        </div>
      `;
    }

    // Build standard structure
    modDiv.innerHTML = `
      <div class="module-header-meta">
        <span class="module-badge-role">${mod.role}</span>
        <span class="module-number">MODULE 0${idx + 1}</span>
      </div>
      <h3 class="module-title">${mod.title}</h3>
      
      <div class="module-grid">
        <div class="module-main">
          <!-- Overview & Insight -->
          <div>
            <div class="module-section-title">Overview</div>
            <p style="color: var(--subtext); margin-bottom: 20px;">${mod.overview}</p>
            <div class="insight-callout">
              <p>💡 <strong>Góc nhìn thực tế:</strong> ${mod.insights}</p>
            </div>
          </div>
          
          <!-- Content & Process -->
          <div>
            <div class="module-section-title">Nội dung cốt lõi</div>
            <p style="color: var(--subtext); margin-bottom: 20px;">${mod.mainContent}</p>
          </div>

          <div>
            <div class="module-section-title">Quy trình thực hiện</div>
            <div class="process-steps">
              ${mod.process.map((step, sIdx) => `
                <div class="process-step">
                  <div class="process-step-num">${sIdx + 1}</div>
                  <p>${step}</p>
                </div>
              `).join("")}
            </div>
          </div>

          <!-- Special components (Kanban/Gallery/Ethics) -->
          ${specialSectionHTML}

          <!-- Evidence Gallery -->
          <div>
            <div class="module-section-title">Minh chứng & Trực quan học thuật</div>
            <div class="evidence-gallery">
              ${mod.evidence.map((ev, evIdx) => `
                <div class="evidence-card floating-card" data-mod="${mod.id}" data-ev-idx="${evIdx}">
                  <div class="evidence-icon">
                    ${renderSvgIllustration(mod.id, ev.dataId)}
                  </div>
                  <span>${ev.title}</span>
                </div>
              `).join("")}
            </div>
          </div>
        </div>

        <div class="module-sidebar-widget">
          <!-- Learning Objectives -->
          <div class="module-doc-widget">
            <h4 style="margin-bottom: 12px; font-size: 0.95rem;">Mục tiêu Học tập</h4>
            <ul class="objectives-checklist">
              ${mod.objectives.map(obj => `
                <li>${obj}</li>
              `).join("")}
            </ul>
          </div>

          <!-- Documents list -->
          <div class="module-doc-widget">
            <h4 style="margin-bottom: 8px; font-size: 0.95rem;">Tài liệu Đính kèm</h4>
            ${mod.documents.map(doc => `
              <div class="module-doc-item">
                <div class="doc-info">
                  <span class="doc-icon">📕</span>
                  <div>
                    <div class="doc-name">${doc.name}</div>
                    <span class="doc-size">${doc.size}</span>
                  </div>
                </div>
                <button class="doc-view-btn" data-doc-path="${doc.path}" title="Xem trực tuyến">👁️</button>
              </div>
            `).join("")}
          </div>

          <!-- Self Reflection inside Accordion -->
          <div class="reflection-accordion">
            <div class="accordion-header">
              <h4>✍️ Nhật ký tự suy ngẫm (Reflection)</h4>
              <span class="accordion-icon">▼</span>
            </div>
            <div class="accordion-content">
              <div class="accordion-content-inner">
                ${mod.reflection}
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    container.appendChild(modDiv);
  });

  // Attach interactive features triggers
  initKanbanBoard();
  initGalleryFilter();
  initAccordion();
  initLightbox();
  initDocViewerHooks();
}

/* ==========================================================================
   7. PDF DOCUMENT HUB LOGIC
   ========================================================================== */
function renderDocumentHub() {
  const docList = document.getElementById("hub-document-list");
  docList.innerHTML = "";

  // Get all documents from modules
  const allDocs = [];
  AppData.modules.forEach(mod => {
    mod.documents.forEach(doc => {
      allDocs.push({
        name: doc.name,
        path: doc.path,
        size: doc.size,
        moduleTitle: mod.title
      });
    });
  });

  // Update dynamic count card text
  document.getElementById("counter-documents").textContent = allDocs.length;
  document.getElementById("progress-doc-text").textContent = allDocs.length;

  allDocs.forEach((doc, idx) => {
    const li = document.createElement("li");
    li.role = "presentation";
    li.innerHTML = `
      <div class="hub-doc-link" role="tab" aria-selected="false" data-path="${doc.path}" data-name="${doc.name}">
        <i>📕</i>
        <div>
          <div style="font-weight: 600;">${doc.name}</div>
          <div style="font-size: 0.72rem; color: var(--subtext);">${doc.size}</div>
        </div>
      </div>
    `;
    docList.appendChild(li);
  });

  // Click handler for hub document items
  docList.addEventListener("click", (e) => {
    const link = e.target.closest(".hub-doc-link");
    if (!link) return;

    document.querySelectorAll(".hub-doc-link").forEach(l => l.classList.remove("active"));
    link.classList.add("active");
    link.setAttribute("aria-selected", "true");

    loadPDF(link.getAttribute("data-path"), link.getAttribute("data-name"));
  });

  // PDF controls triggers
  document.getElementById("pdf-zoom-in").addEventListener("click", () => adjustPdfZoom(0.1));
  document.getElementById("pdf-zoom-out").addEventListener("click", () => adjustPdfZoom(-0.1));
  document.getElementById("pdf-fullscreen").addEventListener("click", togglePdfFullscreen);
  document.getElementById("pdf-close-fullscreen").addEventListener("click", togglePdfFullscreen);
  document.getElementById("pdf-download").addEventListener("click", downloadActivePDF);
}

function initDocViewerHooks() {
  // Bind small doc buttons inside modules to open the Document Hub directly
  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".doc-view-btn");
    if (!btn) return;
    
    const path = btn.getAttribute("data-doc-path");
    
    // Scroll to document hub
    const hub = document.getElementById("document-hub");
    if (hub) {
      hub.scrollIntoView({ behavior: "smooth" });
      
      // Auto active corresponding list item in Document Hub
      const hubLink = document.querySelector(`.hub-doc-link[data-path="${path}"]`);
      if (hubLink) {
        setTimeout(() => hubLink.click(), 600);
      }
    }
  });
}

function loadPDF(path, name) {
  activeDocumentPath = path;
  pdfZoomLevel = 1.0;
  
  // Hide placeholder, show toolbar
  document.getElementById("pdf-placeholder").style.display = "none";
  document.getElementById("pdf-toolbar").style.display = "flex";
  document.getElementById("pdf-viewer-title").textContent = name;

  const wrapper = document.getElementById("pdf-frame-wrapper");
  wrapper.style.transform = `scale(1.0)`;
  
  // Clean classes
  wrapper.className = "hub-iframe-wrapper";

  // Use browser embed PDF viewer
  wrapper.innerHTML = `
    <iframe src="${path}#toolbar=0" class="hub-iframe" title="PDF Document Viewer"></iframe>
  `;
}

function adjustPdfZoom(delta) {
  if (!activeDocumentPath) return;
  pdfZoomLevel += delta;
  
  // Constrain zoom levels
  if (pdfZoomLevel < 0.6) pdfZoomLevel = 0.6;
  if (pdfZoomLevel > 1.8) pdfZoomLevel = 1.8;

  const wrapper = document.getElementById("pdf-frame-wrapper");
  wrapper.style.transform = `scale(${pdfZoomLevel})`;
}

function togglePdfFullscreen() {
  if (!activeDocumentPath) return;
  const panel = document.getElementById("pdf-viewer-body");
  panel.classList.toggle("fullscreen");
}

function downloadActivePDF() {
  if (!activeDocumentPath) return;
  const a = document.createElement("a");
  a.href = activeDocumentPath;
  a.download = activeDocumentPath.split("/").pop();
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

/* ==========================================================================
   8. INTERACTIVE KANBAN BOARD (DRAG AND DROP)
   ========================================================================== */
function initKanbanBoard() {
  const board = document.getElementById("kanban-board-mod4");
  if (!board) return;

  const columnsData = [
    {
      id: "todo",
      title: "Cần làm (To Do)",
      class: "todo",
      tasks: [
        { id: "k-1", title: "Khảo sát thực tế hệ thống máy tính", desc: "Đo lường linh kiện ngoại vi cá nhân.", priority: "medium", user: "Đ" },
        { id: "k-2", title: "Ký cam kết Đạo đức AI", desc: "Soạn thảo biên bản tuân thủ liêm chính.", priority: "low", user: "T" }
      ]
    },
    {
      id: "progress",
      title: "Đang làm (In Progress)",
      class: "progress",
      tasks: [
        { id: "k-3", title: "Thiết lập chuỗi truy vấn Boolean", desc: "Tìm kiếm nâng cao cơ sở dữ liệu CRAAP.", priority: "high", user: "H" },
        { id: "k-4", title: "Phát triển bộ Prompt Templates", desc: "Thiết kế few-shot prompting cho LLMs.", priority: "medium", user: "Đ" }
      ]
    },
    {
      id: "review",
      title: "Kiểm tra (Review)",
      class: "review",
      tasks: [
        { id: "k-5", title: "Dàn trang Infographics Module 5", desc: "Cân đối bố cục màu sắc tương phản Figma.", priority: "high", user: "N" }
      ]
    },
    {
      id: "done",
      title: "Hoàn thành (Done)",
      class: "done",
      tasks: [
        { id: "k-6", title: "Xác thực danh sách nguồn tham khảo", desc: "Xuất file trích dẫn chuẩn APA.", priority: "low", user: "Đ" }
      ]
    }
  ];

  renderKanbanColumns(board, columnsData);
}

function renderKanbanColumns(board, data) {
  board.innerHTML = "";
  data.forEach(col => {
    const colDiv = document.createElement("div");
    colDiv.className = `kanban-column ${col.class}`;
    colDiv.setAttribute("data-col-id", col.id);
    
    colDiv.innerHTML = `
      <div class="kanban-column-header">
        <h4 class="kanban-column-title">${col.title}</h4>
        <span class="kanban-card-count" id="count-${col.id}">${col.tasks.length}</span>
      </div>
      <div class="kanban-cards-wrapper" id="wrapper-${col.id}">
        <!-- tasks go here -->
      </div>
    `;

    const wrapper = colDiv.querySelector(".kanban-cards-wrapper");
    col.tasks.forEach(task => {
      const cardDiv = document.createElement("div");
      cardDiv.className = "kanban-card floating-card";
      cardDiv.draggable = true;
      cardDiv.setAttribute("data-task-id", task.id);
      
      cardDiv.innerHTML = `
        <div class="kanban-card-title">${task.title}</div>
        <div class="kanban-card-desc">${task.desc}</div>
        <div class="kanban-card-footer">
          <span class="kanban-card-badge ${task.priority}">${task.priority}</span>
          <div class="kanban-card-assignee" title="Người thực hiện: ${task.user}">${task.user}</div>
        </div>
      `;
      wrapper.appendChild(cardDiv);
    });

    board.appendChild(colDiv);
  });

  // Attach Drag and Drop handlers
  attachKanbanDragDropEvents();
}

function attachKanbanDragDropEvents() {
  const cards = document.querySelectorAll(".kanban-card");
  const wrappers = document.querySelectorAll(".kanban-cards-wrapper");

  cards.forEach(card => {
    card.addEventListener("dragstart", (e) => {
      card.classList.add("dragging");
      e.dataTransfer.setData("text/plain", card.getAttribute("data-task-id"));
    });

    card.addEventListener("dragend", () => {
      card.classList.remove("dragging");
    });
  });

  wrappers.forEach(wrapper => {
    wrapper.addEventListener("dragover", (e) => {
      e.preventDefault(); // allow drop
      const draggingCard = document.querySelector(".kanban-card.dragging");
      if (draggingCard) {
        wrapper.appendChild(draggingCard);
      }
    });

    wrapper.addEventListener("drop", (e) => {
      e.preventDefault();
      updateColumnCounts();
    });
  });
}

function updateColumnCounts() {
  const columns = document.querySelectorAll(".kanban-column");
  columns.forEach(col => {
    const colId = col.getAttribute("data-col-id");
    const count = col.querySelectorAll(".kanban-card").length;
    const countBadge = document.getElementById(`count-${colId}`);
    if (countBadge) countBadge.textContent = count;
  });
}

/* ==========================================================================
   9. GALLERY SEARCH & FILTER (MODULE 5)
   ========================================================================== */
function initGalleryFilter() {
  const searchInput = document.getElementById("gallery-search");
  const grid = document.getElementById("gallery-grid-mod5");
  if (!grid) return;

  const galleryData = [
    { title: "Bố cục lưới Grid System", category: "ui-ux", id: "gallery-grid" },
    { title: "Bảng phân tích CRAAP Infographic", category: "infographic", id: "gallery-craap" },
    { title: "Kiến trúc Von Neumann Schematic", category: "diagram", id: "gallery-von" },
    { title: "Giao diện Dashboards Mockup", category: "ui-ux", id: "gallery-dash" },
    { title: "Ma trận Đạo đức AI Poster", category: "infographic", id: "gallery-ethics-diagram" },
    { title: "Sơ đồ luồng dữ liệu bảo mật", category: "diagram", id: "gallery-secure-flow" }
  ];

  // Render items
  renderGalleryItems(grid, galleryData);

  // Filter Buttons binding
  const filterBtns = document.querySelectorAll("#gallery-filters .filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      
      const filter = btn.getAttribute("data-filter");
      filterGallery(galleryData, filter, searchInput.value);
    });
  });

  // Search input binding
  searchInput.addEventListener("input", () => {
    const activeBtn = document.querySelector("#gallery-filters .filter-btn.active");
    const filter = activeBtn ? activeBtn.getAttribute("data-filter") : "all";
    filterGallery(galleryData, filter, searchInput.value);
  });
}

function renderGalleryItems(grid, data) {
  grid.innerHTML = "";
  data.forEach(item => {
    const div = document.createElement("div");
    div.className = "gallery-item reveal active";
    div.setAttribute("data-category", item.category);
    div.setAttribute("data-title", item.title.toLowerCase());
    
    div.innerHTML = `
      <div class="gallery-item-media">
        ${renderSvgIllustration("gallery", item.id)}
      </div>
      <div class="gallery-item-info">
        <h4 class="gallery-item-title">${item.title}</h4>
        <span class="gallery-item-category">${item.category}</span>
      </div>
    `;

    // Hook clicked items to open in Lightbox modal
    div.addEventListener("click", () => {
      openLightbox(item.title, renderSvgIllustration("gallery", item.id));
    });

    grid.appendChild(div);
  });
}

function filterGallery(data, category, query) {
  const items = document.querySelectorAll("#gallery-grid-mod5 .gallery-item");
  const normalizedQuery = query.toLowerCase().trim();

  items.forEach(item => {
    const itemCat = item.getAttribute("data-category");
    const itemTitle = item.getAttribute("data-title");
    
    const matchesCategory = (category === "all" || itemCat === category);
    const matchesSearch = (normalizedQuery === "" || itemTitle.includes(normalizedQuery));

    if (matchesCategory && matchesSearch) {
      item.style.display = "flex";
      setTimeout(() => item.classList.add("active"), 50);
    } else {
      item.classList.remove("active");
      setTimeout(() => item.style.display = "none", 300);
    }
  });
}

/* ==========================================================================
   10. LIGHTBOX & ACCORDIONS
   ========================================================================== */
function initLightbox() {
  const modal = document.getElementById("lightbox-modal");
  const close = document.getElementById("lightbox-close");
  
  if (close) {
    close.addEventListener("click", () => {
      modal.classList.remove("active");
    });
  }

  // Close when clicking backdrop
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("active");
    }
  });

  // Evidence cards binding inside modules
  document.addEventListener("click", (e) => {
    const card = e.target.closest(".evidence-card");
    if (!card) return;

    const modId = card.getAttribute("data-mod");
    const evIdx = parseInt(card.getAttribute("data-ev-idx"));

    const moduleObj = AppData.modules.find(m => m.id === modId);
    if (moduleObj && moduleObj.evidence[evIdx]) {
      const evidenceData = moduleObj.evidence[evIdx];
      openLightbox(evidenceData.title, renderSvgIllustration(modId, evidenceData.dataId));
    }
  });
}

function openLightbox(title, svgContent) {
  const modal = document.getElementById("lightbox-modal");
  const titleDiv = document.getElementById("lightbox-title");
  const preview = document.getElementById("lightbox-preview-container");

  titleDiv.textContent = title;
  preview.innerHTML = svgContent;
  modal.classList.add("active");
}

function initAccordion() {
  document.addEventListener("click", (e) => {
    const header = e.target.closest(".accordion-header");
    if (!header) return;

    const accordion = header.closest(".reflection-accordion");
    const content = accordion.querySelector(".accordion-content");
    const inner = content.querySelector(".accordion-content-inner");

    header.classList.toggle("active");

    if (header.classList.contains("active")) {
      content.style.maxHeight = inner.offsetHeight + "px";
    } else {
      content.style.maxHeight = "0px";
    }
  });
}

/* ==========================================================================
   11. SKILL INTELLIGENCE CENTER (RADAR CHART)
   ========================================================================== */
function renderRadarChart() {
  const svg = document.getElementById("radar-svg");
  if (!svg) return;

  const data = AppData.skills;
  const labels = data.labels;
  const scores = data.scores;
  
  const width = 400;
  const height = 400;
  const cx = width / 2;
  const cy = height / 2;
  const radius = 130;
  const totalAxes = labels.length;

  svg.innerHTML = ""; // Clear existing grid paths

  // Detect theme colors dynamically from CSS variables
  const isDark = document.documentElement.getAttribute("data-theme") === "dark";
  const gridColor = isDark ? "#4B5563" : "#E5E7EB";
  const textColor = isDark ? "#E5E7EB" : "#1F2937";
  const primaryColor = isDark ? "#2DD4BF" : "#0F766E";

  // 1. Draw 5 concentric helper grid polygons
  const levels = 5;
  for (let level = 1; level <= levels; level++) {
    const lvlRadius = (radius / levels) * level;
    let points = [];
    for (let i = 0; i < totalAxes; i++) {
      const angle = (Math.PI * 2 / totalAxes) * i - Math.PI / 2;
      const px = cx + Math.cos(angle) * lvlRadius;
      const py = cy + Math.sin(angle) * lvlRadius;
      points.push(`${px},${py}`);
    }
    const polygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
    polygon.setAttribute("points", points.join(" "));
    polygon.setAttribute("class", "radar-grid-polygon");
    polygon.setAttribute("stroke", gridColor);
    svg.appendChild(polygon);
  }

  // 2. Draw radiating axis lines & labels
  for (let i = 0; i < totalAxes; i++) {
    const angle = (Math.PI * 2 / totalAxes) * i - Math.PI / 2;
    const ax = cx + Math.cos(angle) * radius;
    const ay = cy + Math.sin(angle) * radius;

    // Line
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", cx);
    line.setAttribute("y1", cy);
    line.setAttribute("x2", ax);
    line.setAttribute("y2", ay);
    line.setAttribute("class", "radar-grid-line");
    line.setAttribute("stroke", gridColor);
    svg.appendChild(line);

    // Label Placement offsets
    const lx = cx + Math.cos(angle) * (radius + 25);
    const ly = cy + Math.sin(angle) * (radius + 15);
    const label = document.createElementNS("http://www.w3.org/2000/svg", "text");
    label.setAttribute("x", lx);
    label.setAttribute("y", ly);
    label.setAttribute("class", "radar-label");
    label.setAttribute("fill", textColor);
    label.textContent = labels[i];
    svg.appendChild(label);
  }

  // 3. Draw active user scores value polygon area
  let valPoints = [];
  scores.forEach((score, i) => {
    const lvlRadius = (radius * score) / 100;
    const angle = (Math.PI * 2 / totalAxes) * i - Math.PI / 2;
    const px = cx + Math.cos(angle) * lvlRadius;
    const py = cy + Math.sin(angle) * lvlRadius;
    valPoints.push(`${px},${py}`);
  });

  const valueArea = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
  valueArea.setAttribute("points", valPoints.join(" "));
  valueArea.setAttribute("class", "radar-value-area");
  valueArea.setAttribute("stroke", primaryColor);
  svg.appendChild(valueArea);

  // 4. Draw marker points
  scores.forEach((score, i) => {
    const lvlRadius = (radius * score) / 100;
    const angle = (Math.PI * 2 / totalAxes) * i - Math.PI / 2;
    const px = cx + Math.cos(angle) * lvlRadius;
    const py = cy + Math.sin(angle) * lvlRadius;

    const point = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    point.setAttribute("cx", px);
    point.setAttribute("cy", py);
    point.setAttribute("class", "radar-value-point");
    point.setAttribute("fill", primaryColor);
    
    // Quick tooltips on SVG points
    const title = document.createElementNS("http://www.w3.org/2000/svg", "title");
    title.textContent = `${labels[i]}: ${score}/100`;
    point.appendChild(title);

    svg.appendChild(point);
  });
}

function renderSkillMatrix() {
  const container = document.getElementById("skills-matrix-container");
  container.innerHTML = "";

  AppData.skills.matrix.forEach(sk => {
    const div = document.createElement("div");
    div.className = "skill-matrix-item";
    
    // Determine level badge class
    const lvlClass = sk.level.toLowerCase();

    div.innerHTML = `
      <span class="skill-level-badge ${lvlClass}">${sk.level}</span>
      <div class="skill-matrix-info">
        <h4 class="skill-matrix-name">${sk.name}</h4>
        <p class="skill-matrix-desc">${sk.description}</p>
      </div>
    `;
    container.appendChild(div);
  });
}

/* ==========================================================================
   12. ACHIEVEMENT DIGITAL BADGES SYSTEM (DEPRECATED)
   ========================================================================== */

/* ==========================================================================
   13. REFLECTION CENTER SUMMARY
   ========================================================================== */
function renderReflectionCenter() {
  const r = AppData.reflectionCenter;
  
  document.getElementById("reflection-intro-text").textContent = r.intro;
  document.getElementById("reflection-conclusion-text").textContent = r.conclusion;

  const flow = document.getElementById("reflection-flow-container");
  flow.innerHTML = "";

  r.flow.forEach((f, idx) => {
    const step = document.createElement("div");
    step.className = "flow-step";
    
    step.innerHTML = `
      <div class="flow-dot">${idx + 1}</div>
      <div class="flow-step-title">${f.step}</div>
      <p class="flow-step-desc">${f.desc}</p>
    `;

    flow.appendChild(step);
  });
}

/* ==========================================================================
   14. TYPING EFFECTS AND COUNTERS (CONTROL CENTER)
   ========================================================================== */
function initTypingEffect() {
  const textEl = document.getElementById("typing-text");
  const words = [
    "Hệ điều hành Học tập cá nhân (Digital OS Portfolio)",
    "Học phần: Nhập môn Công nghệ số & Ứng dụng Trí tuệ nhân tạo",
    "Hoàn thành xuất sắc 100% mục tiêu đào tạo"
  ];
  
  let wordIdx = 0;
  let charIdx = 0;
  let isDeleting = false;

  function type() {
    const currentWord = words[wordIdx];
    
    if (isDeleting) {
      // Remove characters
      textEl.textContent = currentWord.substring(0, charIdx - 1);
      charIdx--;
    } else {
      // Add characters
      textEl.textContent = currentWord.substring(0, charIdx + 1);
      charIdx++;
    }

    let speed = isDeleting ? 25 : 55;

    // Word completed typing
    if (!isDeleting && charIdx === currentWord.length) {
      speed = 1800; // Pause at end of word
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      wordIdx = (wordIdx + 1) % words.length;
      speed = 400; // Pause before typing next word
    }

    setTimeout(type, speed);
  }

  // Start loop
  type();
}

function initCounters() {
  const counters = [
    { id: "counter-assignments", circleId: "circle-assignments", total: 6 },
    { id: "counter-documents", circleId: "circle-documents", total: 6 },
    { id: "counter-skills", circleId: "circle-skills", total: 7 },
    { id: "counter-progress", circleId: "circle-progress", total: 100 }
  ];

  // Intersection Observer to start counters when they roll into view
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        counters.forEach(counter => {
          const el = document.getElementById(counter.id);
          const circle = document.getElementById(counter.circleId);
          const targetVal = parseInt(el.getAttribute("data-val"));
          
          animateValue(el, 0, targetVal, 1500);
          animateSvgCircle(circle, targetVal, counter.total);
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  const controlCenter = document.getElementById("control-center");
  if (controlCenter) observer.observe(controlCenter);
}

function animateValue(obj, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

function animateSvgCircle(circle, val, total) {
  if (!circle) return;
  // Circumference = 2 * PI * r = 2 * 3.14159 * 30 = 188.4
  const circumference = 188.4;
  const pct = val / total;
  const offset = circumference - (pct * circumference);
  
  circle.style.strokeDashoffset = offset;
}

/* ==========================================================================
   15. COMMAND PALETTE LOGIC (CTRL + K)
   ========================================================================== */
function initCommandPalette() {
  const overlay = document.getElementById("command-palette-overlay");
  const search = document.getElementById("palette-search");
  const resultsList = document.getElementById("palette-results");
  
  // Available commands database
  const commands = [
    { title: "Đi tới Overview (Tổng quan)", subtitle: "Scroll to welcome & summary", icon: "📊", action: () => scrollToSection("control-center") },
    { title: "Đi tới Knowledge Map", subtitle: "Scroll to interactive map", icon: "🗺️", action: () => scrollToSection("knowledge-map") },
    { title: "Bài 1 - Bài tập 1: Máy tính & Thiết bị ngoại vi", subtitle: "Module 1 details", icon: "📘", action: () => scrollToSection("module-1") },
    { title: "Bài 2 - Bài tập 2: Khai thác Dữ liệu", subtitle: "Module 2 details", icon: "📘", action: () => scrollToSection("module-2") },
    { title: "Bài 3 - Bài tập 2: Tổng quan Trí tuệ Nhân tạo", subtitle: "Module 3 details", icon: "📘", action: () => scrollToSection("module-3") },
    { title: "Bài 4 - Bài tập 3: Giao tiếp và Hợp tác Số", subtitle: "Module 4 details", icon: "📘", action: () => scrollToSection("module-4") },
    { title: "Bài 5 - Bài tập 2: Sáng tạo Nội dung Số", subtitle: "Module 5 details", icon: "📘", action: () => scrollToSection("module-5") },
    { title: "Bài 6 - Bài tập 4: Đạo đức Học thuật & AI", subtitle: "Module 6 details", icon: "📘", action: () => scrollToSection("module-6") },
    { title: "Mở Document Hub (Tài liệu)", subtitle: "Notion preview hub", icon: "📂", action: () => scrollToSection("document-hub") },
    { title: "Xem Biểu đồ Kỹ năng (Radar)", subtitle: "Radar skill chart", icon: "⚡", action: () => scrollToSection("skills-center") },
    { title: "Xem Reflection (Tổng kết)", subtitle: "Learning maturity report", icon: "📝", action: () => scrollToSection("reflection") },
    { title: "Thay đổi giao diện sáng tối", subtitle: "Toggle Light/Dark Theme", icon: "🌓", action: () => toggleTheme(), shortcut: "Cmd Shift L" },
    { title: "Phóng to PDF Viewer", subtitle: "Zoom in PDF document scale", icon: "➕", action: () => adjustPdfZoom(0.15) },
    { title: "Thu nhỏ PDF Viewer", subtitle: "Zoom out PDF document scale", icon: "➖", action: () => adjustPdfZoom(-0.15) }
  ];

  let selectedIdx = 0;

  // Open on Ctrl + K / Cmd + K or dock toggle click
  document.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      openPalette();
    }
  });

  const dockToggle = document.getElementById("dock-command-toggle");
  if (dockToggle) {
    dockToggle.addEventListener("click", openPalette);
  }

  // Keyboard navigation within the palette
  search.addEventListener("keydown", (e) => {
    const listItems = resultsList.querySelectorAll(".palette-item");
    
    if (e.key === "Escape") {
      closePalette();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      selectedIdx = (selectedIdx + 1) % listItems.length;
      updateSelection(listItems);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      selectedIdx = (selectedIdx - 1 + listItems.length) % listItems.length;
      updateSelection(listItems);
    } else if (e.key === "Enter") {
      e.preventDefault();
      const activeItem = listItems[selectedIdx];
      if (activeItem) {
        activeItem.click();
      }
    }
  });

  // Handle live search filtering
  search.addEventListener("input", () => {
    filterCommands(search.value);
  });

  // Close when clicking outside modal
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closePalette();
  });

  function openPalette() {
    overlay.classList.add("active");
    setTimeout(() => search.focus(), 100);
    filterCommands(""); // populate all
  }

  function closePalette() {
    overlay.classList.remove("active");
    search.value = "";
  }

  function filterCommands(query) {
    resultsList.innerHTML = "";
    selectedIdx = 0;
    
    const term = query.toLowerCase().trim();
    const filtered = commands.filter(cmd => 
      cmd.title.toLowerCase().includes(term) || cmd.subtitle.toLowerCase().includes(term)
    );

    if (filtered.length === 0) {
      resultsList.innerHTML = `<li style="padding: 20px; text-align: center; color: var(--subtext);">Không tìm thấy kết quả nào</li>`;
      return;
    }

    filtered.forEach((cmd, idx) => {
      const li = document.createElement("li");
      li.className = `palette-item ${idx === 0 ? 'selected' : ''}`;
      li.setAttribute("role", "option");
      
      li.innerHTML = `
        <div class="palette-item-left">
          <span class="palette-item-icon">${cmd.icon}</span>
          <div>
            <div class="palette-item-title">${cmd.title}</div>
            <div class="palette-item-subtitle">${cmd.subtitle}</div>
          </div>
        </div>
        ${cmd.shortcut ? `<span class="palette-item-shortcut">${cmd.shortcut}</span>` : ""}
      `;

      li.addEventListener("click", () => {
        cmd.action();
        closePalette();
      });

      resultsList.appendChild(li);
    });
  }

  function updateSelection(items) {
    items.forEach((item, idx) => {
      if (idx === selectedIdx) {
        item.classList.add("selected");
        item.scrollIntoView({ block: "nearest" });
      } else {
        item.classList.remove("selected");
      }
    });
  }

  function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }
}

/* ==========================================================================
   16. FLOATING DOCK & MOBILE MENU
   ========================================================================== */
function initFloatingDock() {
  const dock = document.querySelector(".floating-dock");
  if (!dock) return;

  // Jump navigations from dock items
  dock.addEventListener("click", (e) => {
    const item = e.target.closest(".dock-item");
    if (!item) return;

    const navId = item.getAttribute("data-nav");
    if (navId) {
      const section = document.getElementById(navId);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }
  });

  // Mobile menu toggle drawer
  const toggle = document.getElementById("menu-toggle");
  const sidebar = document.getElementById("sidebar");
  
  if (toggle) {
    toggle.addEventListener("click", () => {
      sidebar.classList.toggle("active");
      const isExpanded = sidebar.classList.contains("active");
      toggle.setAttribute("aria-expanded", isExpanded);
    });
  }

  // Close mobile drawer when clicking links
  document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
      sidebar.classList.remove("active");
      if (toggle) toggle.setAttribute("aria-expanded", "false");
    });
  });
}

/* ==========================================================================
   17. SCROLL EFFECTS (SPY, PROGRESS, REVEAL, DOCK AUTO-HIDE)
   ========================================================================== */
function initScrollEffects() {
  const revealItems = document.querySelectorAll(".reveal");
  const scrollBar = document.getElementById("scroll-progress-bar");
  const btt = document.getElementById("back-to-top");
  const dockWrapper = document.getElementById("floating-dock-wrapper");
  const navLinks = document.querySelectorAll(".nav-link");
  
  let lastScrollTop = 0;

  // Reveal elements on viewport entrance
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  }, { threshold: 0.1 });

  revealItems.forEach(item => observer.observe(item));

  // Scrollspy & page progress calculation
  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    
    // Progress bar
    const progress = (scrollTop / scrollHeight) * 100;
    scrollBar.style.setProperty("--scroll-progress", progress + "%");

    // Back to top button visibility
    if (scrollTop > 400) {
      btt.classList.add("visible");
    } else {
      btt.classList.remove("visible");
    }

    // Auto-hide bottom floating dock on scroll down, show on scroll up
    if (scrollTop > lastScrollTop && scrollTop > 150) {
      dockWrapper.classList.add("hidden");
    } else {
      dockWrapper.classList.remove("hidden");
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // prevent negative values

    // Scrollspy navigation highlight
    let currentActive = "";
    document.querySelectorAll("section, article.module-block").forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (scrollTop >= sectionTop - 150) {
        currentActive = section.getAttribute("id");
      }
    });

    // Handle Knowledge Graph nodes highlight sync
    if (currentActive && currentActive.startsWith("module-")) {
      const activeIdx = parseInt(currentActive.split("-")[1]) - 1;
      const nodes = document.querySelectorAll(".graph-node");
      nodes.forEach((n, idx) => {
        if (idx === activeIdx) {
          n.classList.add("active");
        } else {
          n.classList.remove("active");
        }
      });
    }

    // Highlight sidebar nav links
    navLinks.forEach(link => {
      link.classList.remove("active");
      const targetId = link.getAttribute("data-target");
      if (targetId === currentActive || (currentActive.startsWith("module-") && targetId === "modules-container")) {
        link.classList.add("active");
      }
    });
  });

  // Back to top click behavior
  btt.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* ==========================================================================
   18. SVG ACADEMIC ILLUSTRATION RENDER ENGINE
   ========================================================================== */
function renderSvgIllustration(moduleId, dataId) {
  // SVG illustration color themes
  const colorPrimary = "var(--primary)";
  const colorSecondary = "var(--secondary)";
  const colorAccent = "var(--accent)";
  const colorBorder = "var(--border)";
  const colorText = "var(--text)";
  const colorSubtext = "var(--subtext)";

  // SVG Templates Mapping (renders academic designs based on request ID)
  switch (dataId) {
    // MODULE 1 SVG ILLUSTRATIONS
    case "von-neumann":
      return `
        <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="35" width="40" height="50" rx="4" fill="none" stroke="${colorPrimary}" stroke-width="1.5"/>
          <text x="30" y="62" font-size="7" font-weight="bold" fill="${colorText}" text-anchor="middle">INPUT</text>
          <text x="30" y="72" font-size="5" fill="${colorSubtext}" text-anchor="middle">Keyboard/Mouse</text>
          
          <rect x="70" y="10" width="60" height="40" rx="4" fill="none" stroke="${colorSecondary}" stroke-width="1.5"/>
          <text x="100" y="28" font-size="7" font-weight="bold" fill="${colorText}" text-anchor="middle">CPU (ALU & CU)</text>
          
          <rect x="70" y="70" width="60" height="40" rx="4" fill="none" stroke="${colorSecondary}" stroke-width="1.5"/>
          <text x="100" y="88" font-size="7" font-weight="bold" fill="${colorText}" text-anchor="middle">MEMORY (RAM)</text>
          
          <rect x="150" y="35" width="40" height="50" rx="4" fill="none" stroke="${colorPrimary}" stroke-width="1.5"/>
          <text x="170" y="62" font-size="7" font-weight="bold" fill="${colorText}" text-anchor="middle">OUTPUT</text>
          <text x="170" y="72" font-size="5" fill="${colorSubtext}" text-anchor="middle">Display/Audio</text>
          
          <!-- Arrows -->
          <path d="M 50 60 L 70 30" stroke="${colorAccent}" stroke-width="1" fill="none" marker-end="url(#arrow)"/>
          <path d="M 50 60 L 70 90" stroke="${colorAccent}" stroke-width="1" fill="none"/>
          <path d="M 130 30 L 150 60" stroke="${colorAccent}" stroke-width="1" fill="none"/>
          <path d="M 130 90 L 150 60" stroke="${colorAccent}" stroke-width="1" fill="none"/>
          <path d="M 100 50 L 100 70" stroke="${colorPrimary}" stroke-width="1" stroke-dasharray="2 2" fill="none"/>
        </svg>
      `;

    case "components-table":
      return `
        <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
          <line x1="10" y1="20" x2="190" y2="20" stroke="${colorPrimary}" stroke-width="1.5"/>
          <line x1="10" y1="40" x2="190" y2="40" stroke="${colorBorder}" stroke-width="1"/>
          <line x1="10" y1="65" x2="190" y2="65" stroke="${colorBorder}" stroke-width="1"/>
          <line x1="10" y1="90" x2="190" y2="90" stroke="${colorBorder}" stroke-width="1"/>
          
          <text x="15" y="15" font-size="6" font-weight="bold" fill="${colorPrimary}">Linh Kiện</text>
          <text x="80" y="15" font-size="6" font-weight="bold" fill="${colorPrimary}">Chức Năng</text>
          <text x="150" y="15" font-size="6" font-weight="bold" fill="${colorPrimary}">Tốc Độ</text>

          <text x="15" y="32" font-size="6" fill="${colorText}">CPU (Core i7)</text>
          <text x="80" y="32" font-size="5.5" fill="${colorSubtext}">Tính toán & xử lý lệnh chính</text>
          <text x="150" y="32" font-size="6" fill="${colorAccent}">4.8 GHz</text>

          <text x="15" y="52" font-size="6" fill="${colorText}">RAM (DDR5)</text>
          <text x="80" y="52" font-size="5.5" fill="${colorSubtext}">Lưu trữ dữ liệu tạm thời cực nhanh</text>
          <text x="150" y="52" font-size="6" fill="${colorAccent}">5600 MT/s</text>

          <text x="15" y="77" font-size="6" fill="${colorText}">SSD PCIe 4.0</text>
          <text x="80" y="77" font-size="5.5" fill="${colorSubtext}">Bộ nhớ lưu trữ lâu dài bền bỉ</text>
          <text x="150" y="77" font-size="6" fill="${colorAccent}">7000 MB/s</text>
        </svg>
      `;

    case "io-flow":
      return `
        <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
          <circle cx="40" cy="60" r="18" fill="none" stroke="${colorPrimary}" stroke-width="1.5"/>
          <text x="40" y="63" font-size="6" font-weight="bold" fill="${colorText}" text-anchor="middle">Input Device</text>
          
          <rect x="85" y="45" width="30" height="30" rx="3" fill="none" stroke="${colorSecondary}" stroke-width="1.5"/>
          <text x="100" y="63" font-size="7" font-weight="bold" fill="${colorText}" text-anchor="middle">BUS</text>

          <circle cx="160" cy="60" r="18" fill="none" stroke="${colorPrimary}" stroke-width="1.5"/>
          <text x="160" y="63" font-size="6" font-weight="bold" fill="${colorText}" text-anchor="middle">Output Device</text>

          <path d="M 58 60 L 85 60" stroke="${colorAccent}" stroke-width="1.5" stroke-dasharray="3 2" fill="none"/>
          <path d="M 115 60 L 142 60" stroke="${colorAccent}" stroke-width="1.5" stroke-dasharray="3 2" fill="none"/>
        </svg>
      `;

    // MODULE 2 SVG ILLUSTRATIONS
    case "craap-matrix":
      return `
        <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="10" width="80" height="40" rx="4" fill="none" stroke="${colorPrimary}" stroke-width="1"/>
          <text x="15" y="24" font-size="7" font-weight="bold" fill="${colorPrimary}">C - Currency</text>
          <text x="15" y="36" font-size="5" fill="${colorSubtext}">Tính cập nhật thời điểm xuất bản</text>

          <rect x="110" y="10" width="80" height="40" rx="4" fill="none" stroke="${colorSecondary}" stroke-width="1"/>
          <text x="115" y="24" font-size="7" font-weight="bold" fill="${colorSecondary}">R - Relevance</text>
          <text x="115" y="36" font-size="5" fill="${colorSubtext}">Mức độ liên quan sâu tới chủ đề</text>

          <rect x="10" y="65" width="50" height="45" rx="4" fill="none" stroke="${colorAccent}" stroke-width="1"/>
          <text x="15" y="78" font-size="6" font-weight="bold" fill="${colorAccent}">A - Authority</text>
          <text x="15" y="90" font-size="4.5" fill="${colorSubtext}">Uy tín tác giả</text>

          <rect x="70" y="65" width="60" height="45" rx="4" fill="none" stroke="${colorPrimary}" stroke-width="1"/>
          <text x="75" y="78" font-size="6" font-weight="bold" fill="${colorPrimary}">A - Accuracy</text>
          <text x="75" y="90" font-size="4.5" fill="${colorSubtext}">Độ chính xác dữ liệu</text>

          <rect x="140" y="65" width="50" height="45" rx="4" fill="none" stroke="${colorSecondary}" stroke-width="1"/>
          <text x="145" y="78" font-size="6" font-weight="bold" fill="${colorSecondary}">P - Purpose</text>
          <text x="145" y="90" font-size="4.5" fill="${colorSubtext}">Mục đích biên soạn</text>
        </svg>
      `;

    case "boolean-query":
      return `
        <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
          <circle cx="75" cy="60" r="35" fill="none" stroke="${colorPrimary}" stroke-width="1.5"/>
          <circle cx="125" cy="60" r="35" fill="none" stroke="${colorSecondary}" stroke-width="1.5"/>
          
          <text x="50" y="63" font-size="7" font-weight="bold" fill="${colorText}">Set A</text>
          <text x="150" y="63" font-size="7" font-weight="bold" fill="${colorText}">Set B</text>

          <path d="M 90 35 A 35 35 0 0 1 110 85 A 35 35 0 0 1 90 35" fill="rgba(20, 184, 166, 0.2)"/>
          <text x="100" y="63" font-size="6" font-weight="bold" fill="${colorAccent}" text-anchor="middle">AND</text>
          <text x="100" y="112" font-size="6.5" fill="${colorSubtext}" text-anchor="middle">Phép toán giao tập hợp Boolean</text>
        </svg>
      `;

    case "citation-map":
      return `
        <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="60" r="14" fill="none" stroke="${colorPrimary}" stroke-width="2"/>
          <text x="100" y="63" font-size="6.5" font-weight="bold" fill="${colorText}" text-anchor="middle">Báo cáo</text>

          <circle cx="40" cy="30" r="10" fill="none" stroke="${colorSecondary}" stroke-width="1"/>
          <text x="40" y="33" font-size="5" fill="${colorSubtext}" text-anchor="middle">Nguồn 1</text>

          <circle cx="160" cy="30" r="10" fill="none" stroke="${colorSecondary}" stroke-width="1"/>
          <text x="160" y="33" font-size="5" fill="${colorSubtext}" text-anchor="middle">Nguồn 2</text>

          <circle cx="50" cy="90" r="10" fill="none" stroke="${colorSecondary}" stroke-width="1"/>
          <text x="50" y="93" font-size="5" fill="${colorSubtext}" text-anchor="middle">Nguồn 3</text>

          <circle cx="150" cy="90" r="10" fill="none" stroke="${colorSecondary}" stroke-width="1"/>
          <text x="150" y="93" font-size="5" fill="${colorSubtext}" text-anchor="middle">Nguồn 4</text>

          <!-- citation lines -->
          <line x1="88" y1="50" x2="50" y2="38" stroke="${colorAccent}" stroke-width="1" stroke-dasharray="1 1"/>
          <line x1="112" y1="50" x2="150" y2="38" stroke="${colorAccent}" stroke-width="1" stroke-dasharray="1 1"/>
          <line x1="88" y1="68" x2="60" y2="84" stroke="${colorAccent}" stroke-width="1"/>
          <line x1="112" y1="68" x2="140" y2="84" stroke="${colorAccent}" stroke-width="1"/>
        </svg>
      `;

    // MODULE 3 SVG ILLUSTRATIONS
    case "ai-branches":
      return `
        <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="60" r="45" fill="none" stroke="${colorPrimary}" stroke-width="1.5"/>
          <text x="100" y="25" font-size="6.5" font-weight="bold" fill="${colorPrimary}" text-anchor="middle">Artificial Intelligence</text>

          <circle cx="100" cy="67" r="30" fill="none" stroke="${colorSecondary}" stroke-width="1.5"/>
          <text x="100" y="48" font-size="6" font-weight="bold" fill="${colorSecondary}" text-anchor="middle">Machine Learning</text>

          <circle cx="100" cy="74" r="16" fill="rgba(34, 197, 94, 0.15)" stroke="${colorAccent}" stroke-width="1.5"/>
          <text x="100" y="76" font-size="5" font-weight="bold" fill="${colorText}" text-anchor="middle">GenAI/DL</text>
        </svg>
      `;

    case "prompt-testing":
      return `
        <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="15" width="55" height="90" rx="3" fill="none" stroke="${colorPrimary}" stroke-width="1"/>
          <text x="37.5" y="27" font-size="6" font-weight="bold" fill="${colorText}" text-anchor="middle">System Prompt</text>
          <line x1="15" y1="35" x2="60" y2="35" stroke="${colorBorder}" stroke-width="1"/>
          <text x="15" y="47" font-size="4.5" fill="${colorSubtext}">- Định nghĩa vai trò</text>
          <text x="15" y="57" font-size="4.5" fill="${colorSubtext}">- Khai báo ngữ cảnh</text>
          <text x="15" y="67" font-size="4.5" fill="${colorSubtext}">- Quy định chuẩn ra</text>

          <rect x="72" y="15" width="55" height="90" rx="3" fill="none" stroke="${colorSecondary}" stroke-width="1"/>
          <text x="99.5" y="27" font-size="6" font-weight="bold" fill="${colorText}" text-anchor="middle">Few-Shot Examples</text>
          <line x1="77" y1="35" x2="122" y2="35" stroke="${colorBorder}" stroke-width="1"/>
          <rect x="77" y="42" width="45" height="15" rx="2" fill="none" stroke="${colorBorder}"/>
          <text x="80" y="51" font-size="4" fill="${colorSubtext}">Ví dụ 1: Input/Output</text>
          <rect x="77" y="62" width="45" height="15" rx="2" fill="none" stroke="${colorBorder}"/>
          <text x="80" y="71" font-size="4" fill="${colorSubtext}">Ví dụ 2: Input/Output</text>

          <rect x="135" y="15" width="55" height="90" rx="3" fill="rgba(34, 197, 94, 0.05)" stroke="${colorAccent}" stroke-width="1"/>
          <text x="162.5" y="27" font-size="6" font-weight="bold" fill="${colorText}" text-anchor="middle">User Query</text>
          <line x1="140" y1="35" x2="185" y2="35" stroke="${colorBorder}" stroke-width="1"/>
          <text x="142" y="50" font-size="5" font-weight="bold" fill="${colorAccent}">Câu hỏi thực tế</text>
          <text x="142" y="65" font-size="4.5" fill="${colorSubtext}">của người học</text>
        </svg>
      `;

    case "prompt-templates":
      return `
        <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
          <rect x="20" y="20" width="160" height="80" rx="4" fill="none" stroke="${colorPrimary}" stroke-width="1"/>
          <text x="30" y="35" font-size="7" font-weight="bold" fill="${colorPrimary}">PROMPT TEMPLATE: [ROLE_PLAY]</text>
          <rect x="30" y="45" width="140" height="40" rx="2" fill="none" stroke="${colorBorder}"/>
          <text x="35" y="55" font-size="5" fill="${colorText}">"Bạn là một chuyên gia về [Lĩnh vực]. Hãy phân tích...</text>
          <text x="35" y="65" font-size="5" fill="${colorText}">Yêu cầu: Viết câu trả lời dưới dạng [Định dạng]..."</text>
          <text x="100" y="110" font-size="6" fill="${colorSubtext}" text-anchor="middle">Thiết kế mẫu cấu trúc lệnh chuẩn hóa</text>
        </svg>
      `;

    // MODULE 4 SVG ILLUSTRATIONS
    case "interactive-kanban-board":
      return `
        <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="10" width="40" height="100" rx="3" fill="none" stroke="${colorPrimary}" stroke-width="1"/>
          <text x="30" y="22" font-size="6" font-weight="bold" fill="${colorText}" text-anchor="middle">TODO</text>
          <rect x="14" y="28" width="32" height="20" rx="2" fill="none" stroke="${colorBorder}"/>
          <rect x="14" y="53" width="32" height="20" rx="2" fill="none" stroke="${colorBorder}"/>

          <rect x="55" y="10" width="40" height="100" rx="3" fill="none" stroke="${colorSecondary}" stroke-width="1"/>
          <text x="75" y="22" font-size="6" font-weight="bold" fill="${colorText}" text-anchor="middle">DOING</text>
          <rect x="59" y="28" width="32" height="20" rx="2" fill="none" stroke="${colorSecondary}"/>
          
          <rect x="100" y="10" width="40" height="100" rx="3" fill="none" stroke="${colorAccent}" stroke-width="1"/>
          <text x="120" y="22" font-size="6" font-weight="bold" fill="${colorText}" text-anchor="middle">REVIEW</text>
          <rect x="104" y="28" width="32" height="20" rx="2" fill="none" stroke="${colorBorder}"/>

          <rect x="145" y="10" width="45" height="100" rx="3" fill="none" stroke="${colorPrimary}" stroke-width="1"/>
          <text x="167.5" y="22" font-size="6" font-weight="bold" fill="${colorText}" text-anchor="middle">DONE</text>
          <rect x="149" y="28" width="37" height="20" rx="2" fill="rgba(34, 197, 94, 0.1)" stroke="${colorAccent}"/>
        </svg>
      `;

    case "raci-table":
      return `
        <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
          <line x1="10" y1="20" x2="190" y2="20" stroke="${colorPrimary}" stroke-width="1.5"/>
          <line x1="10" y1="45" x2="190" y2="45" stroke="${colorBorder}" stroke-width="1"/>
          <line x1="10" y1="70" x2="190" y2="70" stroke="${colorBorder}" stroke-width="1"/>
          <line x1="10" y1="95" x2="190" y2="95" stroke="${colorBorder}" stroke-width="1"/>
          
          <text x="15" y="14" font-size="6" font-weight="bold" fill="${colorText}">Nhiệm vụ</text>
          <text x="75" y="14" font-size="6" font-weight="bold" fill="${colorText}">Trưởng Nhóm</text>
          <text x="120" y="14" font-size="6" font-weight="bold" fill="${colorText}">Thành Viên A</text>
          <text x="160" y="14" font-size="6" font-weight="bold" fill="${colorText}">Thành Viên B</text>

          <text x="15" y="34" font-size="5" fill="${colorSubtext}">Nghiên cứu tài liệu</text>
          <text x="85" y="34" font-size="6" font-weight="bold" fill="${colorAccent}">A</text>
          <text x="128" y="34" font-size="6" font-weight="bold" fill="${colorPrimary}">R</text>
          <text x="168" y="34" font-size="6" font-weight="bold" fill="${colorPrimary}">R</text>

          <text x="15" y="59" font-size="5" fill="${colorSubtext}">Viết báo cáo kỹ thuật</text>
          <text x="85" y="59" font-size="6" font-weight="bold" fill="${colorPrimary}">R</text>
          <text x="128" y="59" font-size="6" font-weight="bold" fill="${colorAccent}">A</text>
          <text x="168" y="59" font-size="6" font-weight="bold" fill="${colorSubtext}">C</text>
        </svg>
      `;

    case "collaboration-flow":
      return `
        <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="35" width="45" height="50" rx="3" fill="none" stroke="${colorPrimary}" stroke-width="1.2"/>
          <text x="32.5" y="55" font-size="6.5" font-weight="bold" fill="${colorText}" text-anchor="middle">ASYNCHRONOUS</text>
          <text x="32.5" y="67" font-size="5" fill="${colorSubtext}" text-anchor="middle">Notion / Email / Git</text>

          <path d="M 65 60 L 135 60" stroke="${colorAccent}" stroke-width="1.5" marker-end="url(#arrow)"/>

          <rect x="145" y="35" width="45" height="50" rx="3" fill="none" stroke="${colorSecondary}" stroke-width="1.2"/>
          <text x="167.5" y="55" font-size="6.5" font-weight="bold" fill="${colorText}" text-anchor="middle">SYNCHRONOUS</text>
          <text x="167.5" y="67" font-size="5" fill="${colorSubtext}" text-anchor="middle">Slack / Zoom / Meet</text>
        </svg>
      `;

    // MODULE 5 SVG ILLUSTRATIONS
    case "design-gallery-view":
      return `
        <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="10" width="80" height="45" rx="3" fill="none" stroke="${colorPrimary}" stroke-width="1"/>
          <line x1="15" y1="40" x2="85" y2="40" stroke="${colorBorder}"/>
          <text x="15" y="24" font-size="6.5" font-weight="bold" fill="${colorText}">Infographic Poster</text>

          <rect x="110" y="10" width="80" height="45" rx="3" fill="none" stroke="${colorSecondary}" stroke-width="1"/>
          <circle cx="150" cy="28" r="10" fill="none" stroke="${colorAccent}"/>
          <text x="115" y="46" font-size="5" fill="${colorSubtext}">UI Elements Figma mockup</text>

          <rect x="10" y="65" width="180" height="45" rx="3" fill="none" stroke="${colorPrimary}" stroke-width="1"/>
          <text x="100" y="90" font-size="7" font-weight="bold" fill="${colorAccent}" text-anchor="middle">Bản vẽ thiết kế UI/UX Dashboard</text>
        </svg>
      `;

    case "design-thinking-process":
      return `
        <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
          <circle cx="30" cy="60" r="15" fill="none" stroke="${colorPrimary}" stroke-width="1.2"/>
          <text x="30" y="62" font-size="5" font-weight="bold" fill="${colorText}" text-anchor="middle">Thấu hiểu</text>

          <circle cx="65" cy="60" r="15" fill="none" stroke="${colorSecondary}" stroke-width="1.2"/>
          <text x="65" y="62" font-size="5" font-weight="bold" fill="${colorText}" text-anchor="middle">Xác định</text>

          <circle cx="100" cy="60" r="15" fill="none" stroke="${colorAccent}" stroke-width="1.2"/>
          <text x="100" y="62" font-size="5" font-weight="bold" fill="${colorText}" text-anchor="middle">Ý tưởng</text>

          <circle cx="135" cy="60" r="15" fill="none" stroke="${colorPrimary}" stroke-width="1.2"/>
          <text x="135" y="62" font-size="5" font-weight="bold" fill="${colorText}" text-anchor="middle">Dựng mẫu</text>

          <circle cx="170" cy="60" r="15" fill="none" stroke="${colorSecondary}" stroke-width="1.2"/>
          <text x="170" y="62" font-size="5" font-weight="bold" fill="${colorText}" text-anchor="middle">Thử nghiệm</text>

          <!-- arrows -->
          <line x1="45" y1="60" x2="50" y2="60" stroke="${colorBorder}"/>
          <line x1="80" y1="60" x2="85" y2="60" stroke="${colorBorder}"/>
          <line x1="115" y1="60" x2="120" y2="60" stroke="${colorBorder}"/>
          <line x1="150" y1="60" x2="155" y2="60" stroke="${colorBorder}"/>
        </svg>
      `;

    case "grid-color-analysis":
      return `
        <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
          <line x1="20" y1="10" x2="20" y2="110" stroke="${colorBorder}" stroke-width="0.5" stroke-dasharray="2 2"/>
          <line x1="60" y1="10" x2="60" y2="110" stroke="${colorBorder}" stroke-width="0.5" stroke-dasharray="2 2"/>
          <line x1="100" y1="10" x2="100" y2="110" stroke="${colorBorder}" stroke-width="0.5" stroke-dasharray="2 2"/>
          <line x1="140" y1="10" x2="140" y2="110" stroke="${colorBorder}" stroke-width="0.5" stroke-dasharray="2 2"/>
          <line x1="180" y1="10" x2="180" y2="110" stroke="${colorBorder}" stroke-width="0.5" stroke-dasharray="2 2"/>
          
          <rect x="25" y="25" width="150" height="70" fill="none" stroke="${colorPrimary}" stroke-width="1.5"/>
          <text x="100" y="63" font-size="7" font-weight="bold" fill="${colorPrimary}" text-anchor="middle">Bố cục lưới 12 cột (Grid System)</text>
        </svg>
      `;

    // MODULE 6 SVG ILLUSTRATIONS
    case "ethics-principles":
      return `
        <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="60" r="40" fill="none" stroke="${colorPrimary}" stroke-width="1.5"/>
          <text x="100" y="63" font-size="7" font-weight="bold" fill="${colorText}" text-anchor="middle">Responsible AI</text>
          
          <circle cx="100" cy="20" r="8" fill="none" stroke="${colorSecondary}"/>
          <circle cx="140" cy="60" r="8" fill="none" stroke="${colorSecondary}"/>
          <circle cx="100" cy="100" r="8" fill="none" stroke="${colorSecondary}"/>
          <circle cx="60" cy="60" r="8" fill="none" stroke="${colorSecondary}"/>
        </svg>
      `;

    case "ai-citation-guide":
      return `
        <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
          <rect x="15" y="15" width="170" height="90" rx="3" fill="none" stroke="${colorPrimary}" stroke-width="1"/>
          <text x="30" y="32" font-size="7" font-weight="bold" fill="${colorPrimary}">MẪU TRÍCH DẪN APA HỌC THUẬT</text>
          <rect x="30" y="45" width="140" height="45" rx="2" fill="none" stroke="${colorBorder}"/>
          <text x="35" y="58" font-size="5.5" fill="${colorText}">"OpenAI. (2026). ChatGPT (Bản cập nhật ngày 24/5)</text>
          <text x="35" y="70" font-size="5.5" fill="${colorText}">[Mô hình ngôn ngữ lớn]. https://chatgpt.com"</text>
          <text x="35" y="82" font-size="4.8" fill="${colorAccent}">Quy chuẩn trích xuất Generative AI minh bạch</text>
        </svg>
      `;

    case "integrity-check":
      return `
        <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
          <rect x="15" y="45" width="50" height="30" rx="3" fill="none" stroke="${colorPrimary}" stroke-width="1.2"/>
          <text x="40" y="63" font-size="6.5" font-weight="bold" fill="${colorText}" text-anchor="middle">Bài viết gốc</text>

          <path d="M 75 60 L 125 60" stroke="${colorAccent}" stroke-width="1.5"/>

          <rect x="135" y="35" width="50" height="50" rx="3" fill="rgba(34, 197, 94, 0.08)" stroke="${colorAccent}" stroke-width="1.2"/>
          <text x="160" y="55" font-size="6.5" font-weight="bold" fill="${colorText}" text-anchor="middle">Bộ Kiểm Tra</text>
          <text x="160" y="68" font-size="5" fill="${colorSubtext}" text-anchor="middle">Liêm Chính Số</text>
        </svg>
      `;

    // MOCKUP FOR FILTERABLE GALLERY
    case "gallery-grid":
      return `
        <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="10" width="180" height="100" fill="none" stroke="${colorPrimary}" stroke-width="1.5"/>
          <line x1="70" y1="10" x2="70" y2="110" stroke="${colorBorder}" stroke-width="1"/>
          <rect x="20" y="25" width="40" height="15" fill="${colorSecondary}"/>
          <rect x="20" y="50" width="40" height="15" fill="${colorBorder}"/>
          <rect x="20" y="75" width="40" height="15" fill="${colorBorder}"/>
          <rect x="85" y="25" width="90" height="65" rx="3" fill="none" stroke="${colorAccent}" stroke-width="1"/>
        </svg>
      `;
    
    case "gallery-craap":
      return `
        <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
          <rect x="15" y="15" width="170" height="90" rx="4" fill="none" stroke="${colorSecondary}" stroke-width="1.5"/>
          <circle cx="50" cy="60" r="22" fill="none" stroke="${colorPrimary}" stroke-width="1"/>
          <text x="50" y="63" font-size="8" font-weight="bold" fill="${colorPrimary}" text-anchor="middle">CRAAP</text>
          <line x1="90" y1="35" x2="165" y2="35" stroke="${colorBorder}"/>
          <line x1="90" y1="60" x2="165" y2="60" stroke="${colorBorder}"/>
          <line x1="90" y1="85" x2="165" y2="85" stroke="${colorBorder}"/>
        </svg>
      `;

    case "gallery-von":
      return `
        <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
          <rect x="20" y="30" width="40" height="60" rx="3" fill="none" stroke="${colorPrimary}"/>
          <rect x="80" y="30" width="40" height="60" rx="3" fill="none" stroke="${colorSecondary}"/>
          <rect x="140" y="30" width="40" height="60" rx="3" fill="none" stroke="${colorAccent}"/>
          <path d="M 60 60 L 80 60" stroke="${colorBorder}"/>
          <path d="M 120 60 L 140 60" stroke="${colorBorder}"/>
        </svg>
      `;

    case "gallery-dash":
      return `
        <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
          <rect x="15" y="15" width="170" height="90" rx="3" fill="none" stroke="${colorPrimary}" stroke-width="1"/>
          <rect x="25" y="25" width="40" height="30" rx="2" fill="none" stroke="${colorSecondary}"/>
          <rect x="75" y="25" width="40" height="30" rx="2" fill="none" stroke="${colorAccent}"/>
          <rect x="125" y="25" width="50" height="70" rx="2" fill="none" stroke="${colorBorder}"/>
          <rect x="25" y="65" width="90" height="30" rx="2" fill="none" stroke="${colorPrimary}"/>
        </svg>
      `;

    case "gallery-ethics-diagram":
      return `
        <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="60" r="30" fill="none" stroke="${colorAccent}" stroke-width="1.5"/>
          <line x1="100" y1="10" x2="100" y2="110" stroke="${colorBorder}"/>
          <line x1="50" y1="60" x2="150" y2="60" stroke="${colorBorder}"/>
        </svg>
      `;

    case "gallery-secure-flow":
      return `
        <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
          <rect x="20" y="35" width="50" height="50" rx="4" fill="none" stroke="${colorPrimary}"/>
          <rect x="130" y="35" width="50" height="50" rx="4" fill="none" stroke="${colorSecondary}"/>
          <path d="M 70 60 L 130 60" stroke="${colorAccent}" stroke-dasharray="3 3"/>
        </svg>
      `;

    default:
      return `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="180" height="100" rx="3" fill="none" stroke="${colorBorder}" stroke-width="1.5"/><text x="100" y="65" font-size="7" fill="${colorSubtext}" text-anchor="middle">Academic Graphic Mockup</text></svg>`;
  }
}
