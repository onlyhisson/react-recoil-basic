import React from "react";
import Error from "./Error";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, status: 200, message: "" };
  }

  static getDerivedStateFromError(error) {
    const { status, message } = error.toJSON();

    // 다음 렌더링에서 폴백 UI가 보이도록 상태를 업데이트 합니다.
    return { hasError: true, status, message };
  }

  componentDidCatch(error, errorInfo) {
    const { status, message } = error.toJSON();

    // 에러 리포팅 서비스에 에러를 기록할 수도 있습니다.
    //logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // 폴백 UI를 커스텀하여 렌더링할 수 있습니다.
      return <Error props={this.state} />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
