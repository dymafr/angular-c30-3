import * as AuthSelectors from './auth.selectors';
import * as AuthReducer from './auth.reducer';

describe('*** Auth selectors ***', () => {
  describe('*** SelectAuthFeature ***', () => {
    it('-> should return AuthState', () => {
      const initialAuthState = AuthReducer.AUTH_INTIAL_STATE;
      const stateSlice = AuthSelectors.selectAuthFeature({
        [AuthReducer.authStateKey]: initialAuthState,
      });
      expect(stateSlice).toEqual(initialAuthState);
    });
  });
});
