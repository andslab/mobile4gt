import analytics from '@react-native-firebase/analytics';

export const gaTrackScreen = (route) => {
  if (!route?.name) return;

  let name;

  const titleCase = (str) => {
    if (typeof str !== 'string') return '';
    return str.replace(/([A-Z])/g, ' $1').replace(/^./, function (str) {
      return str.toUpperCase();
    });
  };

  switch (route.name) {
    case 'QuestionClassifier':
      name = route?.params?.project?.slug ?? route.name;
      break;
    case 'SwipeClassifier':
      name = route?.params?.project?.slug ?? route.name;
      break;
    case 'DrawingClassifier':
      name = route?.params?.project?.slug ?? route.name;
      break;
    case 'MultiAnswerClassifier':
      name = route?.params?.project?.slug ?? route.name;
      break;
    case 'ProjectList':
      name = route?.params?.selectedProjectTag
        ? `Project List - ${titleCase(route.params.selectedProjectTag)}`
        : 'Project List';
      break;
    // As a default convert the route name to title case.
    default:
      name = titleCase(route.name);
  }

  analytics().logScreenView({
    screen_name: name,
    screen_class: name,
  });
};
