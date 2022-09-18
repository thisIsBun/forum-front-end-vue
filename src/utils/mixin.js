import moment from 'moment'

export const fromNowFilter = {
  filters: {
    fromNow(datetime) {

      if (!datetime) {
        return ('--')
      } else {
        return moment(datetime).fromNow()
      }

    }
  }
}

